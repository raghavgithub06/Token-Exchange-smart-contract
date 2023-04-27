const { expect } = require("chai");

describe("TokenExchange", function() {
  let TokenExchange;
  let token1;
  let token2;
  let exchange;

  const exchangeRate = 100;

  beforeEach(async () => {
    [owner, user1] = await ethers.getSigners();

    // Deploy ERC20 tokens
    const Token1 = await ethers.getContractFactory("Token1");
    token1 = await Token1.connect(owner).deploy("Token1", "TK1", 1000000);
    await token1.deployed();

    const Token2 = await ethers.getContractFactory("Token2");
    token2 = await Token2.connect(owner).deploy("Token2", "TK2", 1000000);
    await token2.deployed();

    // Deploy TokenExchange contract
    TokenExchange = await ethers.getContractFactory("TokenExchange");
    exchange = await TokenExchange.connect(owner).deploy(token1.address, token2.address, exchangeRate);
    await exchange.deployed();

    // Give some tokens to user1
    await token1.connect(owner).transfer(user1.address, 100);
    await token2.connect(owner).transfer(user1.address, 100);
  });

  it("should exchange token1 for token2", async function() {
    // Approve token transfer
    await token2.connect(user1).approve(exchange.address, 10000);

    // Exchange token1 for token2
    await exchange.connect(user1).exchange(50);

    // Check balances
    const user1Token1Balance = await token1.balanceOf(user1.address);
    const user1Token2Balance = await token2.balanceOf(user1.address);
    const exchangeToken1Balance = await token1.balanceOf(exchange.address);
    const exchangeToken2Balance = await token2.balanceOf(exchange.address);

    expect(user1Token1Balance).to.equal(50);
    expect(user1Token2Balance).to.equal(50 * exchangeRate);
    expect(exchangeToken1Balance).to.equal(50);
    expect(exchangeToken2Balance).to.equal(0);
  });
});
