import AppLayout from 'components/AppLayout'
// import Avatar from 'components/Avatar'
import Devit from 'components/Devit'
import { useEffect, useState } from 'react'
export default function HomePage () {
  const [timeline, setTimeLine] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/api/statuses/home_timeline')
      .then(res => res.json())
      .then(setTimeLine)
  }, [])
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
                username={devit.username}
                message={devit.message}
                id={devit.id}
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
            border-bottom: 1px solid #ccc;
            height: 49px;
            position: sticky;
            top: 0;
            width: 100%;
            display: flex;
        }
        
        h2 {
          font-size: 21px;
          font-weight: 800;
        }
        nav{
          bottom: 0;
          border-top: 1px solid #ccc;
          height: 49px;
          position: sticky;
          width: 100%;
        }
        {/* section {
          padding-top: 49px; */}
        }
        
        `}</style>
    </>
  )
}
