const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');
const contract = require("@truffle/contract");
const adminJson = require("@openzeppelin/upgrades-core/artifacts/ProxyAdmin.json")
const ProxyAdmin = contract(adminJson)
ProxyAdmin.setProvider(web3.currentProvider)

const ERC721U2UBeacon = artifacts.require('ERC721U2UBeacon');

const { getProxyImplementation, updateImplementation } = require("./config.js")

const ERC721U2U = artifacts.require('ERC721U2U');

module.exports = async function (deployer, network) {
  //upgrade old 721 proxy
  const erc721Proxy = await ERC721U2U.deployed();
  await upgradeProxy(erc721Proxy.address, ERC721U2U, { deployer });

  const erc721 = await getProxyImplementation(ERC721U2U, network, ProxyAdmin)

  const beacon721 = await ERC721U2UBeacon.deployed();

  await updateImplementation(beacon721, erc721)
};
