const { network } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()

  const chainId = network.config.chainId

  if (chainId == 5) {
    console.log(network.name, chainId)
  }

  let argsERC20 = ["Bizi", "BIZ"]
  let args = []

  if (!developmentChains.includes(network.name)) {
    console.log("Goerli network: Deploying contract...")
    const token = await deploy("Bizi", {
      from: deployer,
      log: true,
      args: args,
      waitConfirmations: network.config.blockConfirmations,
    })

    console.log("Goerli network: Deploying contract...")
    const erc20 = await deploy("ERC20", {
      from: deployer,
      log: true,
      args: argsERC20,
      waitConfirmations: network.config.blockConfirmations,
    })

    verify(token.address, args)

    console.log("Contract deployed and verified!")
    console.log("------------------------------------")
  }
}

module.exports.tags = ["all", "token"]
