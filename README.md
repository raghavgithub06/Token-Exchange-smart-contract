# TokenExchange Smart Contract 

The TokenExchange smart contract is a simple token exchange contract that allows users to exchange one ERC20 token (token1) for another ERC20 token (token2) based on a fixed exchange rate. The contract facilitates token swaps between the two specified tokens at the given exchange rate.

## Contract Details

- **License**: MIT
- **Solidity Version Compatibility**: ^0.8.0

## State Variables

- `token1Address` (address): The address of the first ERC20 token (token1) to be exchanged.
- `token2Address` (address): The address of the second ERC20 token (token2) to be exchanged.
- `exchangeRate` (uint): The fixed exchange rate from token1 to token2.
- `owner` (address): The address of the contract owner, who will receive token1 from users during the exchange.

## Functions

1. `exchange`: Allows users to exchange their token1 for token2 based on the fixed exchange rate. Users need to approve the contract to spend their token2 tokens before calling this function.

## Note

This documentation provides an overview of the TokenExchange smart contract and its functionalities. Before deploying or interacting with any smart contract, it is crucial to conduct a thorough code review, audit the contract's security, and understand the implications of each function. The contract enables users to exchange one ERC20 token for another at a fixed exchange rate specified during contract deployment. Users must ensure they have sufficient allowances for both token1 and token2 before executing an exchange.
