// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
pragma abicoder v2;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.0/contracts/security/ReentrancyGuard.sol";
// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.0/contracts/utils/math/SafeMath.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.0/contracts/token/ERC20/IERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.0/contracts/token/ERC20/utils/SafeERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.0/contracts/utils/Counters.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.0/contracts/token/ERC1155/IERC1155.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.0/contracts/token/ERC1155/IERC1155.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.0/contracts/token/ERC1155/utils/ERC1155Holder.sol";
// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.0/contracts/access/Ownable.sol";
import "./ERC721NFTFeeDistributor.sol";
import "./interfaces/IWETH.sol";

contract ERC1155NFTMarket is
    ReentrancyGuard,
    ERC1155Holder,
    Ownable,
    ERC721NFTFeeDistributor
{
    using SafeMath for uint256;
    using SafeERC20 for IERC20;
    using Counters for Counters.Counter;

    struct Ask {
        address seller;
        address nft;
        uint256 tokenId;
        uint256 quantity;
        address quoteToken;
        uint256 pricePerUnit;
    }

    struct Offer {
        address buyer;
        address nft;
        uint256 tokenId;
        uint256 quantity;
        address quoteToken;
        uint256 pricePerUnit;
    }

    Counters.Counter private _askIds;
    Counters.Counter private _offerIds;

    mapping(uint256 => Ask) public asks;
    mapping(uint256 => Offer) public offers;

    event AskNew(
        uint256 askId,
        address seller,
        address nft,
        uint256 tokenId,
        uint256 quantity,
        address quoteToken,
        uint256 pricePerUnit
    );

    event AskCancel(uint256 askId);

    event OfferNew(
        uint256 offerId,
        address buyer,
        address nft,
        uint256 tokenId,
        uint256 quantity,
        address quoteToken,
        uint256 pricePerUnit
    );

    event OfferCancel(uint256 offerId);

    event OfferAccept(
        uint256 offerId,
        address seller,
        uint256 quantity,
        uint256 price,
        uint256 netPrice
    );

    event Buy(
        uint256 askId,
        address buyer,
        uint256 quantity,
        uint256 price,
        uint256 netPrice
    );

    modifier notContract() {
        require(!_isContract(msg.sender), "Contract not allowed");
        require(msg.sender == tx.origin, "Proxy contract not allowed");
        _;
    }

    address public immutable WETH;

    constructor(address _feeRecipient, uint256 _feePercent, address _WETHAddress)
        ERC721NFTFeeDistributor(_feeRecipient, _feePercent)
    {
        WETH = _WETHAddress;
    }


    // constructor(address _feeRecipient, uint256 _feePercent)
    //     ERC721NFTFeeDistributor(_feeRecipient, _feePercent)
    // {}

    /**
     * @notice Create ask order
     * @param _nft: contract address of the NFT
     * @param _tokenId: tokenId of the NFT
     * @param _quantity: quantity of order
     * @param _quoteToken: quote token
     * @param _pricePerUnit: price per unit (in wei)
     */
    function createAsk(
        address _nft,
        uint256 _tokenId,
        uint256 _quantity,
        address _quoteToken,
        uint256 _pricePerUnit
    ) external nonReentrant notContract {
        require(
            _quantity > 0,
            "ERC1155NFTMarket: _quantity must be greater than zero"
        );
        require(
            _pricePerUnit > 0,
            "ERC1155NFTMarket: _pricePerUnit must be greater than zero"
        );
        _askIds.increment();
        IERC1155(_nft).safeTransferFrom(
            _msgSender(),
            address(this),
            _tokenId,
            _quantity,
            ""
        );
        asks[_askIds.current()] = Ask({
            seller: _msgSender(),
            nft: _nft,
            tokenId: _tokenId,
            quoteToken: _quoteToken,
            pricePerUnit: _pricePerUnit,
            quantity: _quantity
        });

        emit AskNew(
            _askIds.current(),
            _msgSender(),
            _nft,
            _tokenId,
            _quantity,
            _quoteToken,
            _pricePerUnit
        );
    }

    /**
 * @notice Buy nft using ETH
 * @param askId: id of ask
 * @param quantity: quantity to buy
 */
    function buyUsingEth(uint256 askId, uint256 quantity)
    external
    payable
    nonReentrant
    notContract
    {
        require(
            quantity > 0,
            "ERC1155NFTMarket: quantity must be greater than zero"
        );
        require(
            asks[askId].quantity >= quantity,
            "ERC1155NFTMarket: quantity is not enough"
        );
        Ask storage ask = asks[askId];
        require(
            ask.quoteToken == address(WETH), // Check if the quote token is WETH
            "ERC1155NFTMarket: ask is not in WETH"
        );
        uint256 price = ask.pricePerUnit.mul(quantity);
        require(
            msg.value >= price,
            "ERC1155NFTMarket: insufficient ETH sent"
        );

        // Convert ETH to WETH
        IWETH(WETH).deposit{value: msg.value}();

        ask.quantity = ask.quantity.sub(quantity);

        uint256 fees = _distributeFees(ask.nft, address(WETH), price);
        uint256 netPrice = price.sub(fees);

        // Transfer net price to the seller
        IWETH(WETH).transfer(ask.seller, netPrice);

        // Refund excess WETH to the buyer
        if (msg.value > price) {
            IWETH(WETH).transfer(msg.sender, msg.value.sub(price));
        }

        IERC1155(ask.nft).safeTransferFrom(
            address(this),
            msg.sender,
            ask.tokenId,
            quantity,
            ""
        );

        if (ask.quantity == 0) {
            delete asks[askId];
        }

        emit Buy(askId, msg.sender, quantity, price, netPrice);
    }


    /**
    * @notice Create offer using ETH
    * @param _nft: address of NFT contract
    * @param _tokenId: token id of NFT
    * @param _quantity: quantity to offer
    */
    function createOfferUsingEth(
    address _nft,
    uint256 _tokenId,
    uint256 _quantity
    )
        external
        payable
        nonReentrant
        notContract
    {
        require(
            _quantity > 0,
            "ERC1155NFTMarket: _quantity must be greater than zero"
        );
        uint256 pricePerUnit = msg.value.div(_quantity);
        require(
            pricePerUnit > 0,
            "ERC1155NFTMarket: price per unit must be greater than zero"
        );

        // Convert ETH to WETH
        IWETH(WETH).deposit{value: msg.value}();

        _offerIds.increment();
        offers[_offerIds.current()] = Offer({
            buyer: msg.sender,
            nft: _nft,
            tokenId: _tokenId,
            quoteToken: address(WETH), // Use WETH as the quote token
            pricePerUnit: pricePerUnit,
            quantity: _quantity
        });

        emit OfferNew(
            _offerIds.current(),
            msg.sender,
            _nft,
            _tokenId,
            _quantity,
            address(WETH),
            pricePerUnit
        );
    }



    /**
     * @notice Cancel Ask
     * @param askId: id of ask
     */
    function cancelAsk(uint256 askId) external nonReentrant {
        require(
            asks[askId].seller == _msgSender(),
            "ERC1155NFTMarket: only seller"
        );
        Ask memory ask = asks[askId];
        IERC1155(ask.nft).safeTransferFrom(
            address(this),
            ask.seller,
            ask.tokenId,
            ask.quantity,
            ""
        );
        delete asks[askId];
        emit AskCancel(askId);
    }

    /**
     * @notice Offer
     * @param _nft: address of nft contract
     * @param _tokenId: token id of nft
     * @param _quantity: quantity to offer
     * @param _quoteToken: quote token
     * @param _pricePerUnit: price per unit
     */
    function createOffer(
        address _nft,
        uint256 _tokenId,
        uint256 _quantity,
        address _quoteToken,
        uint256 _pricePerUnit
    ) external nonReentrant notContract {
        require(
            _quantity > 0,
            "ERC1155NFTMarket: _quantity must be greater than zero"
        );
        require(
            _pricePerUnit > 0,
            "ERC1155NFTMarket: _pricePerUnit must be greater than zero"
        );
        _offerIds.increment();
        IERC20(_quoteToken).safeTransferFrom(
            _msgSender(),
            address(this),
            _pricePerUnit.mul(_quantity)
        );
        offers[_offerIds.current()] = Offer({
            buyer: _msgSender(),
            nft: _nft,
            tokenId: _tokenId,
            quoteToken: _quoteToken,
            pricePerUnit: _pricePerUnit,
            quantity: _quantity
        });
        emit OfferNew(
            _offerIds.current(),
            _msgSender(),
            _nft,
            _tokenId,
            _quantity,
            _quoteToken,
            _pricePerUnit
        );
    }

    /**
     * @notice Cancel Offer
     * @param offerId: id of the offer
     */
    function cancelOffer(uint256 offerId) external nonReentrant {
        require(
            offers[offerId].buyer == _msgSender(),
            "ERC1155NFTMarket: only offer owner"
        );
        Offer memory offer = offers[offerId];
        IERC20(offer.quoteToken).safeTransfer(
            offer.buyer,
            offer.pricePerUnit.mul(offer.quantity)
        );
        delete offers[offerId];
        emit OfferCancel(offerId);
    }

    /**
     * @notice Accept Offer
     * @param offerId: id of the offer
     * @param quantity: quantity to accept
     */
    function acceptOffer(uint256 offerId, uint256 quantity)
        external
        nonReentrant
        notContract
    {
        require(
            quantity > 0,
            "ERC1155NFTMarket: quantity must be greater than zero"
        );
        require(
            offers[offerId].quantity >= quantity,
            "ERC1155NFTMarket: quantity is not enought"
        );
        Offer storage offer = offers[offerId];
        offer.quantity = offer.quantity.sub(quantity);
        IERC1155(offer.nft).safeTransferFrom(
            _msgSender(),
            offer.buyer,
            offer.tokenId,
            quantity,
            ""
        );
        uint256 price = offer.pricePerUnit.mul(quantity);
        uint256 fees = _distributeFees(offer.nft, offer.quoteToken, price);
        uint256 netPrice = price.sub(fees);
        IERC20(offer.quoteToken).safeTransfer(_msgSender(), netPrice);
        if (offer.quantity == 0) {
            delete offers[offerId];
        }
        emit OfferAccept(offerId, _msgSender(), quantity, price, netPrice);
    }

    /**
     * @notice Buy nft
     * @param askId: id of ask
     * @param quantity: quantity to buy
     */
    function buy(uint256 askId, uint256 quantity)
        external
        nonReentrant
        notContract
    {
        require(
            quantity > 0,
            "ERC1155NFTMarket: quantity must be greater than zero"
        );
        require(
            asks[askId].quantity >= quantity,
            "ERC1155NFTMarket: quantity is not enought"
        );
        Ask storage ask = asks[askId];
        ask.quantity = ask.quantity.sub(quantity);
        uint256 price = ask.pricePerUnit.mul(quantity);
        IERC20(ask.quoteToken).safeTransferFrom(
            _msgSender(),
            address(this),
            price
        );

        uint256 fees = _distributeFees(ask.nft, ask.quoteToken, price);
        uint256 netPrice = price.sub(fees);
        IERC20(ask.quoteToken).safeTransfer(ask.seller, netPrice);
        IERC1155(ask.nft).safeTransferFrom(
            address(this),
            _msgSender(),
            ask.tokenId,
            quantity,
            ""
        );
        if (ask.quantity == 0) {
            delete asks[askId];
        }

        emit Buy(askId, _msgSender(), quantity, price, netPrice);
    }

    function _isContract(address _addr) internal view returns (bool) {
        uint256 size;
        assembly {
            size := extcodesize(_addr)
        }
        return size > 0;
    }
}