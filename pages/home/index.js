import AppLayout from 'components/AppLayout'
// import Avatar from 'components/Avatar'
import Devit from 'components/Devit'
import { fetchLatestDevits } from 'firebasee/client'
import useUser from 'hooks/useUser'
import { useEffect, useState } from 'react'
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
        nav{
          background: #ffffff;
          bottom: 0;
          border-top: 1px solid #eee;
          height: 49px;
          position: sticky;
          width: 100%;
        }
        
        }
        
        `}</style>
    </>
  )
}
