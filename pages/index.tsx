import Head from "next/head"
import Image from 'next/image'

import ferris from 'assets/ferris-gesture.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Ludovic Mermod</title>
      </Head>
      <div id='home'>
        <div>
          <h1>Welcome to my website&nbsp;!</h1>
          <h2>Ludovic Mermod</h2>
        </div>

        <div>
          <Image id='ferris' src={ferris} alt='ferris' />
        </div>
      </div>
    </>
  )
}
