const { network } = require("hardhat")
const { networkConfig, developmentChains } = require("../helper-hardhat-config")

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()

  const chainId = network.config.chainId

  if (chainId == 31337) {
    console.log(network.name, chainId)
  }

  if (developmentChains.includes(network.name)) {
    console.log("Localhost: Deploying mock contract...")

    let argsERC20 = ["Bizi", "BIZ"]
    let args = []

    const token = await deploy("Bizi", {
      from: deployer,
      log: true,
      args: args,
      waitConfirmations: network.config.blockConfirmations,
    })

    const erc20 = await deploy("ERC20", {
      from: deployer,
      log: true,
      args: argsERC20,
      waitConfirmations: network.config.blockConfirmations,
    })

    console.log("Contract deployed!")
    console.log("------------------------------------")
  }
}

module.exports.tags = ["mocks"]
