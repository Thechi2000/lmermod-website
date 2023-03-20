import Head from "next/head"
import Image from 'next/image'

import ferris from 'assets/ferris-gesture.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Ludovic Mermod</title>
      </Head>
      <div id="home" className="flex pt-8 space-x-10 ">
        <div>
          <h1>Welcome to my website&nbsp;!</h1>
          <h2>Ludovic Mermod</h2>
        </div>

          <Image id='ferris' src={ferris} alt='ferris' />
      </div>
    </>
  )
}
