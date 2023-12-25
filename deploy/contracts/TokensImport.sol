// SPDX-License-Identifier: MIT

pragma solidity 0.7.6;

//tokens 721
import {ERC721U2U} from "@rarible/tokens/contracts/erc-721/ERC721U2U.sol";
import {ERC721U2UMinimal} from "@rarible/tokens/contracts/erc-721-minimal/ERC721U2UMinimal.sol";
import {ERC721U2UFactoryC2} from "@rarible/tokens/contracts/create-2/ERC721U2UFactoryC2.sol";

//tokens 1155
import {ERC1155U2U} from "@rarible/tokens/contracts/erc-1155/ERC1155U2U.sol";
import {ERC1155U2UFactoryC2} from "@rarible/tokens/contracts/create-2/ERC1155U2UFactoryC2.sol";

//meta tokens
import {ERC721U2UMeta} from "@rarible/tokens/contracts/erc-721-minimal/erc-721-minimal-meta/ERC721U2UMeta.sol";
import {ERC1155U2UMeta} from "@rarible/tokens/contracts/erc-1155/erc-1155-meta/ERC1155U2UMeta.sol";

//beacons
import {ERC1155U2UBeacon} from "@rarible/tokens/contracts/beacons/ERC1155U2UBeacon.sol";
import {ERC721U2UMinimalBeacon} from "@rarible/tokens/contracts/beacons/ERC721U2UMinimalBeacon.sol";
import {ERC721U2UBeacon} from "@rarible/tokens/contracts/beacons/ERC721U2UBeacon.sol";
import {ERC1155U2UBeaconMeta} from "@rarible/tokens/contracts/beacons/ERC1155U2UBeaconMeta.sol";
import {ERC721U2UMinimalBeaconMeta} from "@rarible/tokens/contracts/beacons/ERC721U2UMinimalBeaconMeta.sol";

import { TestERC20 } from "@rarible/test/contracts/TestERC20.sol";
