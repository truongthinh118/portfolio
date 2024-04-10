import { Link } from "@nextui-org/react"

export default function Home() {
  return (
    <main id="introduction" className="flex min-h-screen items-center">

      <div>
        <p className="text-2xl">
          Hello
        </p>
        <div className="text-7xl leading-tight font-medium">
          <p >I'M <span className="text-rose-300">TRUONG THINH</span>,</p>
          <p>A SOFTWARE ENGINEER</p>
        </div>
        <p className="text-2xl">Let’s start to be more understanding!</p>
        <br/>
        <br/>

        <div style={{transition: "all 0.2s ease-in-out"}} className="flex h-14 w-14 items-center bg-rose-100 rounded-full text-nowrap hover:scale-125">
          <Link href="/about" showAnchorIcon anchorIcon={<img src="chevron-right.svg" width={'20px'}/>} className="relative left-2/4 text-[#5E6697]">
            About me</Link>
        </div>

      </div>


    </main>

  )
}
