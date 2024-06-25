import React from 'react'
import Image from 'next/image'

function infos() {
  return (
    <div className='flex flex-col lg:ml-20 gap-8'>
      <h1 className='text-6xl'>Infos</h1>
      <div className='text-center text-xl bg-gray-700/70 rounded-xl p-4'>
        <h2 className='text-3xl'>Whisker BETA</h2>
        <p className='text-gray-400'>As explained previously, whisker BETA is meant to be a reference to video games,
          we want to revisit all of the greatest recreation modes that exist in this recreation mode!
          The first sport mode might be a 2D MMO RPG, however for the next worlds,
          we can allow our community select among several recreation styles which we will adapt in Play to earn layout.
        </p>
      </div>
      <div className='text-xl space-y-5'>
        <h2 className='text-3xl'>Whisker financial structure</h2>
        <p className='text-gray-400'>Whisker will initially only have the sale of GamePass NFTs as income.
          The plan is designed so that 100% of the revenues from the first 4 worlds are
          solely dedicated to the development of the project.
        </p>
      </div>
      <div className="flex flex-row space-x-8">
        <Image src="/infos-resume.png" width={768} height={432} alt="Tokenomic schema" />
        <div className="text-xl space-y-5">
          <h2 className="text-3xl">REWARD SYSTEM</h2>
          <p className="text-gray-400">
            For the first world, we are going to put a token system.<br /><br />
            Each player will be rewarded with Tokens as they progress.<br /><br />
            These tokens will be for example $WITCAVEMAN or $WITEGYPT<br /><br />
            These tokens will not be exchangeable and will have no real value.<br /><br />
            These tokens will serve as a bridge between $WIT and the player experience<br /><br />
            This reward system allows each player to be rewarded fairly.
          </p>
        </div>
      </div>
    </div>
  )
}

export default infos