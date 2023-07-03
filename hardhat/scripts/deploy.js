const { ethers } = require("hardhat");

require("hardhat");

async function main() {
  const metadataURL = "ipfs://Qmbygo38DWF1V8GttM1zy89KzyZTPU2FLUzQtiDvB7q6i5";
  const lw3PunksContract = await ethers.deployContract('LW3Punks', [ metadataURL ]);

  await lw3PunksContract.waitForDeployment();

  console.log('LW3Punks Contract Address:', lw3PunksContract.target);
}// LW3Punks Contract Address: 0xbA7073A32174038B49036715cadEe47f8C1210C8

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
