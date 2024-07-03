import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function infos() {
  return (
    <div className='flex flex-col gap-8 lg:ml-5'>
      <h1 className='text-6xl'>Infos</h1>
      <div className='p-4 text-xl text-center card rounded-xl'>
        <h2 className='text-3xl'>Whisker BETA</h2>
        <p className='text-card-text'>As explained previously, whisker BETA is meant to be a reference to video games,
          we want to revisit all of the greatest recreation modes that exist in this recreation mode!
          The first sport mode might be a 2D MMO RPG, however for the next worlds,
          we can allow our community select among several recreation styles which we will adapt in Play to earn layout.
        </p>
      </div>
      <div className='space-y-5 text-xl'>
        <h2 className='text-3xl'>Whisker financial structure</h2>
        <p className='text-card-text'>Whisker will initially only have the sale of GamePass NFTs as income.
          The plan is designed so that 100% of the revenues from the first 4 worlds are
          solely dedicated to the development of the project.
        </p>
      </div>
      <div className="flex flex-col max-sm:space-y-6 md:space-x-8 md:flex-row">
        <Image src="/infos-resume.png" width={768} height={432} alt="Tokenomic schema" />
        <div className="space-y-5 text-xl">
          <h2 className="text-3xl">REWARD SYSTEM</h2>
          <p className="text-card-text">
            Whisker uses an XP system linked to a playfab.<br /><br />
            Rewards will be awarded fairly to each player according to their number of XP at the end of each world.<br /><br />
            Please read this document to understand the stability of the game and the reward system: <Link href="https://medium.com/@witcoinwhisker/whisker-beta-game-game-stability-and-level-system-9528ea0d242c" target='_blank'><span className='text-blue-500 hover:underline'>Game Summary</span></Link><br /><br />
          </p>
        </div>
      </div>
      <div className="flex justify-center p-2">
        <video
          src="/homepage-video-2.mp4"
          width={1920}
          height={1080}
          autoPlay
          loop
          muted
          className="h-auto mb-4 pointer-events-none max-w-screen"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default infos