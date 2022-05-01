// Import ABI's to use
import TokenPresale from "abi/TokenPresale .json";

//
import { AbiItem } from "web3-utils";
/*
 * TESTNET: 97
 * MAINNET: 56
 */
export const contracts: { [key: string]: ContractSelect } = {
  TokenPresale: {
    56: {
      address: "",
      abi: TokenPresale.abi,
    },
    97: {
      address: "",
      abi: TokenPresale.abi,
    },
  },
};

export const getContracts = (
  contract: string,
  chainId?: number
): { address: string; abi: AbiItem | null } => {
  if (!chainId) return { address: "", abi: null };
  const data = contracts[contract][chainId];
  return {
    address: data?.address || "",
    abi: data?.abi || "",
  };
};
type ContractSelect = {
  [key: number]: {
    address: string;
    abi: any;
  };
};
