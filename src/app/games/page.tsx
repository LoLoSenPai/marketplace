import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function games() {
  return (
    <div className='flex flex-col gap-8 lg:ml-5'>
      <h1 className='text-6xl'>Games</h1>
      <div className='p-4 text-xl text-center card rounded-xl'>
        <h2 className='text-3xl'>How to play?</h2>
        <div className='text-card-text'>Whisker BETA games require a Whisker NFT GamePass to play,<br />
          get one here:
          <Link href={'/collection/8453/0xDEE1651cac5319A2e7f7aD260852DeF4724EC103'} className='ml-1 text-blue-500'>MARKETPLACE</Link>.<br />
          There will be 9 temporary worlds, to be won, 15% of our supply.</div>
      </div>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        <div>
          <Link href="https://witwhisker.com/build/" target="_blank" rel="noopener noreferrer">
            <Image
              src='/game-preview.png'
              width={513}
              height={294}
              alt='Preview picture of the 1st game'
              className="object-cover w-full h-72 rounded-xl transition-transform duration-300 hover:scale-105"
            />
          </Link>
          <h2 className='text-center'>
            Whisker BETA World 2 <span className="block text-center">Egyptians</span>
          </h2>
        </div>
        <div className='cursor-not-allowed'>
          <Image
            src='/game-preview-soon.png'
            width={513}
            height={294}
            alt='Coming soon'
            className="object-cover w-full h-72 rounded-xl transition-transform duration-300 hover:scale-103"
          />
          <h2 className='text-center'>
            Whisker BETA World 1 <span className="block text-center">Caveman</span>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default games