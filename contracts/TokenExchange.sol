// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IERC20.sol";

contract TokenExchange {
    address public token1Address;
    address public token2Address;
    uint public exchangeRate; // token1 to token2 exchange rate
    address public owner;

    constructor(address _token1Address, address _token2Address, uint _exchangeRate) {
        token1Address = _token1Address;
        token2Address = _token2Address;
        exchangeRate = _exchangeRate;
        owner = msg.sender;
    }



    function exchange(uint _amount) public {
        require(_amount > 0, "Amount must be greater than 0");

        IERC20 token1 = IERC20(token1Address);
        IERC20 token2 = IERC20(token2Address);

        uint token2Amount = _amount * exchangeRate;
        require(token2.allowance(msg.sender, address(this)) >= token2Amount, "Token 2 allowance not enough");

        token1.transferFrom(msg.sender, address(this), _amount);
        token2.transferFrom(msg.sender, address(this), token2Amount);

        token1.transfer(owner, _amount);
        token2.transfer(msg.sender, token2Amount);
    }
}