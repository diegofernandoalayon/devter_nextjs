import AppLayout from 'components/AppLayout'
import Avatar from 'components/Avatar'
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
            timeline.map(devit => {
              return (
                <article key={devit.id}>
                  <Avatar src={devit.avatar} alt={devit.username} />
                  <div>
                    <strong>{devit.username}</strong>
                    <p>{devit.message}</p>

                  </div>
                </article>
              )
            })
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
            position: fixed;
            top: 0;
            width: 100%;
            display: flex;
        }
        article{
          display: flex;
         
          padding:10px 15px;
        }
        h2 {
          font-size: 21px;
          font-weight: 800;
        }
        nav{
          bottom: 0;
          border-top: 1px solid #ccc;
          height: 49px;
          position: fixed;
          width: 100%;
        }
        section {
          padding-top: 49px;
        }
        
        `}</style>
    </>
  )
}
