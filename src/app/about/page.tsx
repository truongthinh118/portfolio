import Image from 'next/image'
import { Button } from '@nextui-org/react'

export default function Home() {

  return (
    <main className='flex flex-col items-center justify-center gap-16'>
      <div className='w-fit text-8xl font-bold'>
        About me
      </div>
      <div className='flex flex-col lg:flex-row columns-2 gap-16'>
        <div className='w-full'>
          <Button className='w-96 text-5xl glass' fullWidth variant='light'>Education</Button>
        </div>
        <div className='w-full'>
          <Button className='w-96 text-5xl glass' fullWidth variant='light'>Experience</Button>
        </div>
      </div>
    </main>
  )
}