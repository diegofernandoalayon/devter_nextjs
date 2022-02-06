
import Link from 'next/link'
import Head from "next/head"
export default function Timeline ({ username }) {
  return(
    <div>
      <Head>
        <title>timeline</title>
        <link rel="icon" href="/favicon_bird.ico" />
        
      </Head>
      <h1>
        This is timeline of {username}
      </h1>
      <Link href="/"><a>Go home</a></Link>
    </div>
  )
}
Timeline.getInitialProps = () => {

  return { username: 'dfaro'}
}