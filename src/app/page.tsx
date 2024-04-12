import { Link } from "@nextui-org/react"

export default function Home() {
  return (
    <main id="introduction" className="flex flex-row min-h-screen items-center justify-around">

      <div className="text-2xl">
        <p className="font-extralight">Hello, I'm</p>

        <p className="text-7xl font-semibold py-4">TRUONG THINH</p>
        <p>A SOFTWARE ENGINEER</p>

        
        <br />
        <br />

        <div style={{ transition: "all 0.2s ease-in-out" }} className="flex h-14 w-14 items-center bg-warning/20 rounded-full text-nowrap hover:scale-125">
          <Link href="/about" showAnchorIcon anchorIcon={<img src="chevron-right.svg" width={'20px'} />} className="relative left-2/4 text-[#76726F]">
            About me</Link>
        </div>
      </div>
      <img src='logo2.svg' className='hidden md:flex h-[32rem] transition-all ease-in-out hover:scale-125' />
    </main>
  )
}
