require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
};
module.exports = {
  networks: {
    hardhat: {
      // Hardhat provides a default development network you can use to test your contracts locally.
      // You can also add other networks to deploy your contracts to different testnets.
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/oH8c8M3I66LNGdbVn8leBr4Hhe8O_o4M",
      accounts: ["1b0e72aa33c9b205609c8a7910ce9c7d6a580ef9d81599b83388d6181c2f2768"]
    }
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};