"use client";

import { NFT_CONTRACTS } from "@/consts/nft_contracts";
import Link from "next/link";
import {
    Box,
    Flex,
    Image,
} from "@chakra-ui/react";

export default function Marketplace() {
    return (
        <Flex>
            <Box mt="24px" m="auto">
                <h1 className="mb-10 text-6xl text-center">Collections</h1>
                <Flex direction="column" gap="4">
                    {/* <Heading ml="20px" mt="40px">
                        Collections
                    </Heading> */}
                    <Flex
                        direction="row"
                        wrap="wrap"
                        mt="20px"
                        gap="5"
                        justifyContent="space-evenly"
                    >
                        {NFT_CONTRACTS.map((item) => (
                            <Link
                                key={item.address}
                                href={`/collection/${item.chain.id.toString()}/${item.address}`}
                            >
                                <Image src={item.thumbnailUrl} className="rounded-full" w={200} h={200} />
                                {/* <Text fontSize="large" mt="10px">
                                    {item.title}
                                </Text> */}
                            </Link>
                        ))}
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    );
}
