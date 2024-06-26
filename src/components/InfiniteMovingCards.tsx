"use client";

import React from "react";
import { InfiniteImageScroller } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCards() {
    const imagePaths = [
        "/nft-collection/112.webp",
        "/nft-collection/466.webp",
        "/nft-collection/307.webp",
        "/nft-collection/185.webp",
        "/nft-collection/121.webp",
        "/nft-collection/215.webp",
        "/nft-collection/272.webp",
        "/nft-collection/294.webp",
        "/nft-collection/256.webp",
        "/nft-collection/500.webp",
        "/nft-collection/364.webp"
    ];

    return (
        <div className="rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteImageScroller
                imagePaths={imagePaths}
                direction="right"
                speed="slow"
            />
        </div>
    );
}
