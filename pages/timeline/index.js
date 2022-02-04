
import Link from 'next/link'
import Head from "next/head"
export default function Timeline () {
  return(
    <div>
      <Head>
        <title>timeLine</title>
        <link rel="icon" href="/favicon_bird.ico" />
        
      </Head>
      <h1>
        This is timeline
      </h1>
      <Link href="/"><a>Go home</a></Link>
    </div>
  )
}