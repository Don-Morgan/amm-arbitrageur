import { ethers } from 'hardhat';
import { FlashBot } from '../typechain/FlashBot';

async function main(token: string) {
  token = '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a';
  const [signer] = await ethers.getSigners();
  console.log(signer);
  const flashBot: FlashBot = (await ethers.getContractAt(
    'FlashBot',
    '0xf3313C53Bb200Ef19B09637EeD76cF49474Bf750', // your contract address
    signer
  )) as FlashBot;

  await flashBot.addBaseToken(token);
  console.log(`Base token added: ${token}`);
}

const args = process.argv.slice(2);

main(args[0])
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
