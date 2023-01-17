# Description

This is a simple example of a Token Smart Contract in Solidity. It can only me minted by the owner and the initial supply is 14 million.

- Token name: Bizi
- Token symbol: BIZ

## Implementation

You can use `nmp` package manager instead of `yarn`:

```
yarn init
yarn hardhat compile
yarn hardhat deploy
yarn hardhat test
```

I used `@openzeppelin/contracts` solidity library to use the ERC20 token standard.
