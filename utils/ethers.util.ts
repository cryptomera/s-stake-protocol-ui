import { ethers } from "ethers";
import { nodes } from "data/getRpc";
import Erc20 from '../abi/Erc20.json';
import Vault from '../abi/StakeVault.json';
import Nerd from '../abi/NerdFaucetV2.json';


declare global {
  interface Window {
      ethereum: any;
  }
}

export const address = {
  $stake: "0x48Cb165A84cD39a46D8B015307C1A7cd1c773457",
  $flame: "0x7295FF0Ff2676dfd6a21Ef70E05fD8C689fD9127",
  vault: "0x6B5cE3Eb4BdBC5DAD01A8A43AbF0661388160Df6",
  nerd: "0x095D44d32BD5b9Bd456BE8955d81B4Ba1f1c630F"
}

const provider = new ethers.providers.JsonRpcProvider(nodes[97][0]);
const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = web3Provider.getSigner();

// contracts
export const stakeToken = new ethers.Contract(address['$stake'], Erc20.abi, provider);
export const stakeTokenW3 = new ethers.Contract(address['$stake'], Erc20.abi, signer);

export const flameToken = new ethers.Contract(address['$flame'], Erc20.abi, provider);
export const flameTokenW3 = new ethers.Contract(address['$flame'], Erc20.abi, signer);

export const vault = new ethers.Contract(address['vault'], Vault.abi, provider);
export const vaultW3 = new ethers.Contract(address['vault'], Vault.abi, signer);

export const nerd = new ethers.Contract(address['nerd'], Nerd.abi, provider);
export const nerdW3 = new ethers.Contract(address['nerd'], Nerd.abi, signer);