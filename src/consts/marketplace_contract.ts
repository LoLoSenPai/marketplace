import type { Chain } from "thirdweb";
import { base } from "./chains";

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
    address: "0x09869607D6A33A9f077c4fa64149131fFe5D7E5e",
    chain: base,
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
