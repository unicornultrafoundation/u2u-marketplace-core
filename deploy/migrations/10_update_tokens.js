const contract = require("@truffle/contract");
const adminJson = require("@openzeppelin/upgrades-core/artifacts/ProxyAdmin.json")
const ProxyAdmin = contract(adminJson)
ProxyAdmin.setProvider(web3.currentProvider)

const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');
const { getProxyImplementation, getSettings, updateImplementation } = require("./config.js")

const ERC721U2U = artifacts.require('ERC721U2U');
const ERC721U2UBeacon = artifacts.require('ERC721U2UBeacon');
const ERC1155U2U = artifacts.require('ERC1155U2U');
const ERC1155U2UBeacon = artifacts.require('ERC1155U2UBeacon');
const ERC1155U2UBeaconMeta = artifacts.require('ERC1155U2UBeaconMeta');

const ERC1155U2UMeta = artifacts.require('ERC1155U2UMeta');

module.exports = async function (deployer, network) {
  const { deploy_meta, deploy_non_meta } = getSettings(network);

  if (!!deploy_meta) {
    await upgradeERC1155(ERC1155U2UMeta, ERC1155U2UBeaconMeta, deployer, network);
  } 
  
  if (!!deploy_non_meta){
    await upgradeERC1155(ERC1155U2U, ERC1155U2UBeacon, deployer, network);
  }

  //upgrading erc721 token
  const erc721Proxy = await ERC721U2U.deployed();
  await upgradeProxy(erc721Proxy.address, ERC721U2U, { deployer });

  //upgrading erc721 factory
  const erc721 = await getProxyImplementation(ERC721U2U, network, ProxyAdmin)
  const beacon721 = await ERC721U2UBeacon.deployed();
  await updateImplementation(beacon721, erc721)

};

async function upgradeERC1155(erc1155toDeploy, beacon, deployer, network) {
  //upgrading erc1155 token
  const erc1155Proxy = await erc1155toDeploy.deployed();
  await upgradeProxy(erc1155Proxy.address, erc1155toDeploy, { deployer });

  //upgrading erc1155 factory
  const erc1155 = await getProxyImplementation(erc1155toDeploy, network, ProxyAdmin)
  const beacon1155 = await beacon.deployed();

  await updateImplementation(beacon1155, erc1155);
}
