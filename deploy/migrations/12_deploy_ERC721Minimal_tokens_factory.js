const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');
const contract = require("@truffle/contract");
const adminJson = require("@openzeppelin/upgrades-core/artifacts/ProxyAdmin.json")
const ProxyAdmin = contract(adminJson)
ProxyAdmin.setProvider(web3.currentProvider)

const { getProxyImplementation, getSettings, updateImplementation } = require("./config.js")

const ERC721U2UMinimal = artifacts.require('ERC721U2UMinimal');

const ERC721U2UFactoryC2 = artifacts.require('ERC721U2UFactoryC2');

const ERC721U2UMinimalBeacon = artifacts.require('ERC721U2UMinimalBeacon');
const ERC721U2UMinimalBeaconMeta = artifacts.require('ERC721U2UMinimalBeaconMeta');

const TransferProxy = artifacts.require('TransferProxy');
const ERC721LazyMintTransferProxy = artifacts.require('ERC721LazyMintTransferProxy');

const ERC721U2UMeta = artifacts.require('ERC721U2UMeta');

module.exports = async function (deployer, network) {

  const { deploy_meta, deploy_non_meta } = getSettings(network);

  if (!!deploy_meta) {
    await deployERC721Minimal(ERC721U2UMeta, ERC721U2UMinimalBeaconMeta, deployer, network);
  } 

  if (!!deploy_non_meta){
    await deployERC721Minimal(ERC721U2UMinimal, ERC721U2UMinimalBeacon, deployer, network);
  }

};

async function deployERC721Minimal(erc721toDeploy, beacon, deployer, network) {
  const transferProxy = (await TransferProxy.deployed()).address;
  const erc721LazyMintTransferProxy = (await ERC721LazyMintTransferProxy.deployed()).address;

  //deploying erc721 minimal
  const erc721Proxy = await deployProxy(erc721toDeploy, ["U2U", "U2U", "ipfs:/", "", transferProxy, erc721LazyMintTransferProxy], { deployer, initializer: '__ERC721Rarible_init' });
  console.log("deployed erc721 minimal at", erc721Proxy.address)

  const erc721minimal = await getProxyImplementation(erc721toDeploy, network, ProxyAdmin)

  //upgrading 721 beacon
  await deployer.deploy(beacon, erc721minimal, { gas: 1000000 });
  const beacon721Minimal = await beacon.deployed()

  //deploying factory
  const factory721 = await deployer.deploy(ERC721U2UFactoryC2, beacon721Minimal.address, transferProxy, erc721LazyMintTransferProxy, { gas: 2500000 });
  console.log(`deployed factory721 minimal at ${factory721.address}`)
}
