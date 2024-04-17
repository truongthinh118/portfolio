'use client'
import Image from 'next/image'
import { Button } from '@nextui-org/react'

export default function Home() {
  function flipCard(e: any) {
    e.target.classList.toggle('flipped')
    
  }

  return (
    <main className='grid grid-rows-3 grid-flow-col'>
      <div className='text-8xl font-bold place-self-center'>
        About me
      </div>
      <div className='grid grid-flow-row lg:grid-flow-col row-span-2 gap-16 justify-self-center self-start'>

        <Button className='text-5xl glass-font' fullWidth variant='light' onPress={flipCard}>Education</Button>


        <Button className='text-5xl glass-font' fullWidth variant='light'>Experience</Button>

      </div>

    </main>
  )
}