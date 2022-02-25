import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from 'styles/Home.module.css'
import AppLayout from 'components/AppLayout'
import { colors } from 'styles/theme'
import Button from 'components/Button'
import Github from 'components/Icons/Github'
import { loginWithGithub, onAuthStateChangedfun } from 'firebasee/client'
// import Avatar from 'components/Avatar'
import { useRouter } from 'next/router'
const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined
}
export default function Home () {
  const [user, setUser] = useState(undefined)
  const router = useRouter()

  useEffect(() => {
    onAuthStateChangedfun(setUser)
  }, [])

  useEffect(() => {
    user && router.replace('/home')
  }, [user])
  const handleClick = () => {
    loginWithGithub()
      .catch(err => {
        console.error(err)
      })
  }
  return (
    <div>
      <Head>
        <title>devter 🐦 </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon_bird.ico" />
      </Head>

      <AppLayout >
        <section>
          <img src='/devter_logo.png' alt='logo' />
          <h1 className={styles.title}>
            Devter
          </h1>
          <h2>Talk about development with developers </h2>
          <div>
            {
              user === USER_STATES.NOT_LOGGED &&
                <Button onClick={handleClick}>
                  <Github fill='white' width={24} height={24}/>
                  Login With Github
                </Button>
            }
            {
              user === USER_STATES.NOT_KNOWN && <span>Loading ...</span>
            }

          </div>
        </section>
      </AppLayout>
      <style jsx>{`
          img{
            width: 120px;
          }
          h1{
            color: ${colors.primary};
            font-weight:800;
            margin-bottom: 16px;
          }
          h2{
            color: ${colors.secondary};
            font-size: 21px;
            margin: 0;
          }
          div{
            margin-top: 8px;
          }
          section{
            display:grid;
            height: 100%;
            place-content: center;
            place-items: center;
          }
        `}</style>

    </div>
  )
}
