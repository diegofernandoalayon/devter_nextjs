import AppLayout from 'components/AppLayout'
// import Avatar from 'components/Avatar'

export default function HomePage () {
  return (
    <>
      <AppLayout>
        <header>
          {/* <Avatar /> */}
          <h2>Inicio</h2>
        </header>
        <section></section>
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
          padding-top: 100px;
        }
        
        `}</style>
    </>
  )
}
