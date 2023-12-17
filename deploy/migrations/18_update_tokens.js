const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');
const contract = require("@truffle/contract");
const adminJson = require("@openzeppelin/upgrades-core/artifacts/ProxyAdmin.json")
const ProxyAdmin = contract(adminJson)
ProxyAdmin.setProvider(web3.currentProvider)

const { getProxyImplementation, getSettings, updateImplementation } = require("./config.js")

const ERC1155U2UBeacon = artifacts.require('ERC1155U2UBeacon');
const ERC1155U2U = artifacts.require('ERC1155U2U');
const ERC1155U2UMeta = artifacts.require('ERC1155U2UMeta');
const ERC1155U2UBeaconMeta = artifacts.require('ERC1155U2UBeaconMeta');

const ERC721U2UMinimalBeacon = artifacts.require('ERC721U2UMinimalBeacon');
const ERC721U2UMinimal = artifacts.require('ERC721U2UMinimal');
const ERC721U2UMeta = artifacts.require('ERC721U2UMeta');
const ERC721U2UMinimalBeaconMeta = artifacts.require('ERC721U2UMinimalBeaconMeta');

module.exports = async function (deployer, network) {
  const { deploy_meta, deploy_non_meta } = getSettings(network);

  if (!!deploy_meta) {
    await deployTokens(ERC1155U2UMeta, ERC1155U2UBeaconMeta, ERC721U2UMeta, ERC721U2UMinimalBeaconMeta, deployer, network);
  } 
  
  if (!!deploy_non_meta){
    await deployTokens(ERC1155U2U, ERC1155U2UBeacon, ERC721U2UMinimal, ERC721U2UMinimalBeacon, deployer, network);
  }

};

async function deployTokens(erc1155toDeploy, erc1155Beacon, erc721toDeploy, erc721Beacon, deployer, network) {
  //upgrade 1155 proxy
  const erc1155Proxy = await erc1155toDeploy.deployed();
  await upgradeProxy(erc1155Proxy.address, erc1155toDeploy, { deployer });

  const erc1155 = await getProxyImplementation(erc1155toDeploy, network, ProxyAdmin)

  //upgrading 1155 beacon
  const beacon1155 = await erc1155Beacon.deployed();
  await updateImplementation(beacon1155, erc1155)

  //upgrade 721 proxy
  const erc721Proxy = await erc721toDeploy.deployed();
  await upgradeProxy(erc721Proxy.address, erc721toDeploy, { deployer });

  const erc721 = await getProxyImplementation(erc721toDeploy, network, ProxyAdmin)

  //upgrading 721 beacon
  const beacon721 = await erc721Beacon.deployed();
  await updateImplementation(beacon721, erc721)
}