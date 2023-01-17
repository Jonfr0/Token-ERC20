// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Bizi is ERC20, Ownable {
    // 14e24 or 14*10**24 wei
    uint256 public initialSupply = 14000000;

    constructor() ERC20("Bizi", "BIZ") {}

    function mint(address account, uint256 amount) public onlyOwner {
        _mint(account, amount);
    }
}
