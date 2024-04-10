import { Link } from '@nextui-org/react';
import type { Metadata } from "next";
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

        <div className='flex columns-2'>
          <div className='w-full'>
            <div>
              <Link href='https://github.com/truongthinh118'
                isExternal
                showAnchorIcon
                anchorIcon={<i className="icon-light bi bi-github"></i>} />
              <Link href='https://www.linkedin.com/in/thinhdtt/'
                isExternal
                showAnchorIcon
                anchorIcon={<i className="icon-light bi bi-linkedin"></i>} />
              <Link href='mailto:truongthinh118001@gmail.com'
                isExternal
                showAnchorIcon
                anchorIcon={<i className="icon-light bi bi-envelope"></i>} />
            </div>
          </div>
          <div className='w-full'>
            <MailForm />
          </div>
        </div>
      </div>
    </main>
  )
}