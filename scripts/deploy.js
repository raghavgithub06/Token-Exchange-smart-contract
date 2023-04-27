const { ethers } = require("hardhat");

async function main() {
  const TokenExchange = await ethers.getContractFactory("TokenExchange");
  const tokenExchange = await TokenExchange.deploy("0x63c5c183A9cb3781ebe6486e02d7fE8400cbC021", "0x60864B14C966a2D9F95476CAb824C786a50Abb00", 2);
  await tokenExchange.deployed();

  console.log("TokenExchange deployed to:", tokenExchange.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });