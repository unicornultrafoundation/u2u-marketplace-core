const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');
const contract = require("@truffle/contract");
const adminJson = require("@openzeppelin/upgrades-core/artifacts/ProxyAdmin.json")
const ProxyAdmin = contract(adminJson)
ProxyAdmin.setProvider(web3.currentProvider)

const { getProxyImplementation, getSettings, updateImplementation } = require("./config.js")

const ERC1155U2UBeacon = artifacts.require('ERC1155U2UBeacon');
const ERC1155U2UBeaconMeta = artifacts.require('ERC1155U2UBeaconMeta');
const ERC1155U2U = artifacts.require('ERC1155U2U');
const ERC1155U2UFactoryC2 = artifacts.require('ERC1155U2UFactoryC2');

const TransferProxy = artifacts.require('TransferProxy');
const ERC1155LazyMintTransferProxy = artifacts.require('ERC1155LazyMintTransferProxy');

const ERC1155U2UMeta = artifacts.require('ERC1155U2UMeta');

module.exports = async function (deployer, network) {
  const transferProxy = (await TransferProxy.deployed()).address;
  const erc1155LazyMintTransferProxy = (await ERC1155LazyMintTransferProxy.deployed()).address;

  const { deploy_meta, deploy_non_meta } = getSettings(network);

  if (!!deploy_meta) {
    await updateERC1155(ERC1155U2UMeta, ERC1155U2UBeaconMeta, transferProxy, erc1155LazyMintTransferProxy, deployer, network);
  } 
  
  if (!!deploy_non_meta){
    await updateERC1155(ERC1155U2U, ERC1155U2UBeacon, transferProxy, erc1155LazyMintTransferProxy, deployer, network);
  }

};

async function updateERC1155(erc1155toDeploy, beacon, transferProxy, erc1155LazyMintTransferProxy, deployer, network) {
  //upgrade 1155 proxy
  const erc1155Proxy = await erc1155toDeploy.deployed();
  await upgradeProxy(erc1155Proxy.address, erc1155toDeploy, { deployer });

  const erc1155 = await getProxyImplementation(erc1155toDeploy, network, ProxyAdmin)

  //upgrading 1155 beacon
  const beacon1155 = await beacon.deployed();
  await updateImplementation(beacon1155, erc1155)
  
  //deploying new factory
  const factory1155 = await deployer.deploy(ERC1155U2UFactoryC2, beacon1155.address, transferProxy, erc1155LazyMintTransferProxy, { gas: 2500000 });
  console.log(`deployed factory1155 at ${factory1155.address}`)
}