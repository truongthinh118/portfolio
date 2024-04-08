import Image from 'next/image'
import { Button } from '@nextui-org/react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Truong Thinh Contact",
  description: "Truong Thinh Portfolio",
};


export default function Home() {

  return (
    <main className='grid min-h-screen items-center'>
      <div>
        <div className='text-8xl leading-tight'>Let's connect</div>

        <div className='columns-2'>
          <div className='w-full'>
            <div>
              <Button isIconOnly>
                <img src='github-mark.svg'/>
              </Button>
            </div>
          </div>
          <div className='w-full'>b</div>
        </div>
      </div>
    </main>
  )
}