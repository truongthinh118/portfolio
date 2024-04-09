import { Link, LinkIcon } from '@nextui-org/react';
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
            <div>
              <form className="max-w-sm mx-auto">
                <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}