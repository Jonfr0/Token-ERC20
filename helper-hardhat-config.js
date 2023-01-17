const networkConfig = {
  5: {
    name: "goerli",
    blockConfirmations: 6,
  },
  31337: {
    name: "hardhat",
    blockConfirmations: 6,
  },
}

const developmentChains = ["hardhat", "localhost"]

module.exports = {
  developmentChains,
  networkConfig,
}
