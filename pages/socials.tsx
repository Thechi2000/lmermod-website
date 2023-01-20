import { readFileSync } from "fs";
import Head from "next/head";

function Media({ name, username, link }: { name: string, username: string, link: string }) {
  return (<p>{name}: <a href={link} target="_blank">{username}</a></p>)
}

export default function Socials({medias}: {medias: { name: string, username: string, link: string }[]}) {
  return (
    <div id="socials">
      <Head>
        <title>Home - Ludovic Mermod</title>
      </Head>
      <h1>Social medias</h1>
      <ul>
        {medias.map(m => <Media name={m.name} username={m.username} link={m.link} />)}
      </ul>
    </div>
  )
}


export async function getStaticProps() {
  return {
    props: {
      medias: JSON.parse(readFileSync('data/socials.json', 'utf8').toString())
    }
  }
}