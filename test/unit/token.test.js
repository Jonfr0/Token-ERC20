const { network, deployments, ethers } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")
const { assert, expect } = require("chai")
!developmentChains.includes(network.name)
  ? describe.skip
  : describe("Token Unit Test", function () {
      let myContract, erc20, amount
      before(async () => {
        await deployments.fixture(["mocks"])
        erc20 = await ethers.getContract("ERC20")
        myContract = await ethers.getContract("Bizi")
        const amount = ethers.utils.parseEther("1.5")
      })
      describe("Constructor", function () {
        it("Initializes the token name and symbol", async () => {
          try {
            myContract.mint(process.env.ADDRESS, amount)
          } catch (error) {
            expect(error.message).to.include("onlyOwner")
          }
        })
      })
    })
