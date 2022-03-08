import Head from 'next/head'
import styles, { globlaStyles } from './styles'
export default function AppLayout ({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon_bird.ico" />
      </Head>
      <div>
        <main>
          {children}
        </main>
      </div>
      <style jsx>{styles}</style>
      <style jsx global>{globlaStyles}</style>
    </>
  )
}
