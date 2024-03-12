import Image from 'next/image'
 
export default function Home() {
  return (
    <>
      <h1>My Homepage</h1>
      <Image
        src="/img.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
        priority
      />
      <p>Welcome to my homepage!</p>
    </>
  )
}