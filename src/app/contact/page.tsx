import Image from 'next/image'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Truong Thinh Contact",
  description: "Truong Thinh Portfolio",
};


export default function Home() {

  return (
    <main>
      <h1>Contact</h1>
      <p>Welcome to my homepage!</p>
    </main>
  )
}