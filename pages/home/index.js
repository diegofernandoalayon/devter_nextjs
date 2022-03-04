import AppLayout from 'components/AppLayout'
// import Avatar from 'components/Avatar'
import Devit from 'components/Devit'
import Create from 'components/Icons/Create'
import { fetchLatestDevits } from 'firebasee/client'
import useUser from 'hooks/useUser'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Home from 'components/Icons/Home'
import Search from 'components/Icons/Search'
import { colors } from 'styles/theme'
export default function HomePage () {
  const [timeline, setTimeLine] = useState([])
  const user = useUser()

  useEffect(() => {
    user && fetchLatestDevits()
      .then((timeline) => setTimeLine(timeline))
  }, [user])
  return (
    <>
      <AppLayout>
        <header>
          {/* <Avatar /> */}
          <h2>Inicio</h2>
        </header>
        <section>
          {
            timeline.map(devit => (

              <Devit
                key={devit.id}
                avatar={devit.avatar}
                createdAt={devit.createdAt}
                username={devit.username}
                content={devit.content}
                id={devit.id}
                userId={devit.userId}
              />
            )
            )
          }
        </section>
        <nav>
          <Link href='home'>
            <a>
              <Home stroke='#09f' width={32}/>
            </a>
          </Link>
          <Link href='/search'>
            <a>
              <Search stroke='#09f' width={32}/>
            </a>
          </Link>
          <Link href='/compose/devit'>
            <a>
              <Create stroke='#09f' width={32}/>
            </a>
          </Link>

        </nav>
      </AppLayout>
      <style jsx>{`
        header{
            align-items: center;
            background: #ffffffaa;
            backdrop-filter: blur(5px);
            border-bottom: 1px solid #eee;
            height: 49px;
            position: sticky;
            top: 0;
            width: 100%;
            display: flex;
        }
        
        h2 {
          font-size: 21px;
          font-weight: 800;
          padding-left: 15px;
        }
        section{
          flex: 1;
        }
        nav{
          background: #ffffff;
          bottom: 0;
          border-top: 1px solid #eee;
          height: 49px;
          position: sticky;
          width: 100%;
          display: flex;
        }
        nav a {
          align-items: center;
          display: flex;
          flex: 1 1 auto;
          height: 49px;
          justify-content: center;
        }
        nav a:hover{
          background: radial-gradient(#0099ff22 15%, transparent 16%);
          background-size: 170px 170px;
          background-position: right;
        }
        nav a:hover > :global(svg){
          stroke: ${colors.secondary};
        }
        
        }
        
        `}</style>
    </>
  )
}
