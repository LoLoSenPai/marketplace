import type { Chain } from "thirdweb";
import { sepoliaBase } from "./chains";

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
    address: "0xcc5Fcb80dc14C1de40c3CCb26fa4b0CEa0fc5665",
    chain: sepoliaBase,
    title: "Whisker",
    thumbnailUrl:
      "/logo.jpg",
    type: "ERC721",
  },
];
