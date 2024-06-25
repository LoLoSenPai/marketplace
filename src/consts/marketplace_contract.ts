import type { Chain } from "thirdweb";
import { sepoliaBase } from "./chains";

type MarketplaceContract = {
  address: string;
  chain: Chain;
};

/**
 * You need a marketplace contract on each of the chain you want to support
 * Only list one marketplace contract address for each chain
 */
export const MARKETPLACE_CONTRACTS: MarketplaceContract[] = [
  {
    address: "0x8650a658273B660b0533D881b35781404aCA434C",
    chain: sepoliaBase,
  },
  // {
  //   address: "0x571B773F1e4A7C080b51C36f37e06f371C515569",
  //   chain: polygonAmoy,
  // },
  // {
  //   address: "0xe0eFD6fb388405b67b3E9FaFc02649c70E749f03",
  //   chain: sepolia,
  // },
];