import Link from "next/link";
import Image from "next/image";
import { InfiniteMovingCards } from "@/components/InfiniteMovingCards";
import { Button, ButtonGroup } from '@chakra-ui/react'

export default function Home() {
  return (
    <div className="pb-10 space-y-12">

      <div className="flex justify-center p-2">
        <Image
          src="/opening.avif"
          width={1920}
          height={640}
          alt="Hero asset, NFT marketplace"
          quality={100}
          className="mb-4 max-w-screen"
        />
      </div>

      <div className='p-4 text-xl text-center bg-gray-700/70 rounded-xl'>
        <h2 className='text-3xl'>Says what?!</h2>
        <p className='text-gray-400'>Whisker Marketplace includes a marketplace,
          as well as direct access to the games, connect to web3 directly via this page,
          buy and sell NFTs, farm the game and earn rewards</p>
      </div>

      <div className="flex flex-col justify-around max-sm:space-y-6 md:space-x-8 md:flex-row">
        <div className="space-y-5 text-xl lg:max-w-[35%]">
          <h2 className="text-3xl">Whisker Sticker</h2>
          <p className="text-gray-400">
            Whisker offers stickers to its community to conquer the world!
            Get one for free and stick it in the most popular place near you!
            Take a photo of it with the ID @Whisker_Witcoin on X so we can republish it
          </p>
          <Button colorScheme='gray'>Claim</Button>
        </div>
        <Image src="/qr-code.png" width={605} height={311} alt="QR Code to receive real stickers" className="min-w-[40%]" />
      </div>

      <div className="px-8 mx-auto text-center">
        <h1 className="mb-5 text-6xl font-bold text-white">
          <span className="">
            Whisker&apos;s Marketplace
          </span>
          <br />
          by Whisker for Whisker
        </h1>
        <p className="max-w-xl mx-auto text-lg text-white/60">
          Buy and sell your whiskers in your proper home, and get rewarded for this!
        </p>
      </div>

      {/* Card slider */}
      <InfiniteMovingCards />

      {/* New sections */}
      <div className="px-8 mx-auto mt-16 text-center">
        <h2 className="mb-4 text-4xl font-bold text-white">How It Works</h2>
        <p className="max-w-xl mx-auto mb-8 text-lg text-white/60">
          Our marketplace allows you to easily buy and sell your Whiskers NFTs. Simply connect your wallet, browse the available listings, and make a purchase or list your own NFTs for sale.
        </p>
      </div>

      <div className="px-8 mx-auto mt-16 text-center">
        <h2 className="mb-4 text-4xl font-bold text-white">Contact Us</h2>
        <div className="max-w-xl mx-auto mb-8 text-lg text-white/60">
          Have any questions? Feel free to
          <a href="mailto:contact@witwhisker.com" className="text-blue-500 underline"> contact us </a>
          for more information.
        </div>
      </div>
    </div>
  );
};
