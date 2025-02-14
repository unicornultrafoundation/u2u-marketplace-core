const { getSettings } = require("./config.js")

const ERC20TransferProxy = artifacts.require('ERC20TransferProxy');
const TransferProxy = artifacts.require('TransferProxy');

// let ExchangeStateV1 = artifacts.require("ExchangeStateV1.sol");
// let ExchangeOrdersHolderV1 = artifacts.require("ExchangeOrdersHolderV1.sol");
// let TransferProxyForDeprecated = artifacts.require("TransferProxyForDeprecated.sol");
// let ExchangeV1 = artifacts.require("ExchangeV1.sol");
// let RaribleToken = artifacts.require("RaribleToken.sol");
// let MintableToken = artifacts.require("MintableToken.sol");

module.exports = async function (deployer, network) {
  const settings = getSettings(network);
  console.log(settings)

  if (!settings.deploy_legacy) {
    return;
  }

  const transferProxy = (await TransferProxy.deployed());
  const erc20TransferProxy = (await ERC20TransferProxy.deployed());

  await deployer.deploy(
    // ExchangeV1,
    transferProxy.address,
    // transferProxyDeprecated.address,
    erc20TransferProxy.address,
    // exchangeStateV1.address,
    // exchangeOrdersHolderV1.address,
    settings.beneficiary,
    settings.buyerFeeSigner,
    { gas: 5000000 }
  );
  // const exchangeV1 = await ExchangeV1.deployed()
  // console.log(`deployed exchangeV1 at ${exchangeV1.address}`)

  await transferProxy.addOperator(exchangeV1.address)
  await erc20TransferProxy.addOperator(exchangeV1.address)
  // await transferProxyDeprecated.addOperator(exchangeV1.address)
  // await exchangeStateV1.addOperator(exchangeV1.address)

  if (!!settings.rarible_token_legacy){
    await deployer.deploy(
      // RaribleToken,
      settings.rarible_token_legacy.name,
      settings.rarible_token_legacy.symbol,
      settings.rarible_token_legacy.signer,
      settings.rarible_token_legacy.contractURI,
      settings.rarible_token_legacy.tokenURIPrefix,
      { gas: 5000000 }
    );
    // const raribleTokenLegacy = await RaribleToken.deployed();
    // console.log(`deployed raribleTokenLegacy at ${raribleTokenLegacy.address}`)
  }
  
  if (!!settings.mintable_token_legacy){
    await deployer.deploy(
      // MintableToken,
      settings.mintable_token_legacy.name,
      settings.mintable_token_legacy.symbol,
      settings.mintable_token_legacy.newOwner,
      settings.mintable_token_legacy.contractURI,
      settings.mintable_token_legacy.tokenURIPrefix,
      { gas: 5000000 }
    );
    // const mintableTokenLegacy = awaiat MintableToken.deployed();
    // console.log(`deployed mintableTokenLegacy at ${mintableTokenLegacy.address}`)
  }
  
};