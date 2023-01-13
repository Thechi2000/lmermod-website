import Head from "next/head"
import Image from 'next/image'

import ferris from 'assets/ferris.svg'

export default function Home() {
  return (
    <>
      <Head>      
        <title>Home - Ludovic Mermod</title>
      </Head>
      <div id="home" className="horizontal-container">
        <div>
          <h1>Welcome to my website !</h1>
          <h1>All hail the crabs !</h1>
          <h2>By Ludovic Mermod</h2>
        </div>

        <Image id='ferris' src={ferris} alt='ferris' />
      </div>
    </>
  )
}
