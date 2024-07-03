import type { Chain } from "thirdweb";
import { base } from "./chains";

export type NftContract = {
  address: string;
  chain: Chain;
  type: "ERC1155" | "ERC721";

  title?: string;
  description?: string;
  thumbnailUrl?: string;
  slug?: string;
};

/**
 * Below is a list of all NFT contracts supported by your marketplace(s)
 * This is of course hard-coded for demo purpose
 *
 * In reality, the list should be dynamically fetched from your own data source
 */
export const NFT_CONTRACTS: NftContract[] = [
  {
    address: "0xDEE1651cac5319A2e7f7aD260852DeF4724EC103",
    chain: base,
    title: "Whisker",
    thumbnailUrl:
      "/logo.jpg",
    type: "ERC721",
  },
];
