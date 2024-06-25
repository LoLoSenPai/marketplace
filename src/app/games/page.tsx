import React from 'react'
import Image from 'next/image'

function games() {
  return (
    <div className='flex flex-col gap-8 lg:ml-5'>
      <h1 className='text-6xl'>Games</h1>
      <div className='p-4 text-xl text-center bg-gray-700/70 rounded-xl'>
        <h2 className='text-3xl'>How to play?</h2>
        <p className='text-gray-400'>Whisker BETA games require a Whisker NFT GamePass to play,<br/>
          get one here: <span className='text-blue-500'>MARKETPLACE</span>.<br/>
          There will be 9 temporary worlds, to be won, 15% of our supply.</p>
      </div>
      <Image src='/game-preview.png' width={513} height={294} alt='Preview picture of the 1st game' />
    </div>
  )
}

export default games