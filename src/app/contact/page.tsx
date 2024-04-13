import { Link } from '@nextui-org/react';
import type { Metadata } from "next";
import ContactMethod from '../components/contactmethod';
import MailForm from '../components/mailform';

export const metadata: Metadata = {
  title: "Truong Thinh Contact",
  description: "Truong Thinh Portfolio",
};


export default function Home() {

  return (
    <main className='grid min-h-screen items-center'>
      <div>
        <div className='text-8xl leading-tight'>Let's connect</div>
        <div className='flex flex-col xl:flex-row'>
          <div className='w-full hidden xl:block'>
            <ContactMethod />
          </div>
          <div className='w-full'>
            <MailForm />
          </div>
        </div>
      </div>
    </main>
  )
}