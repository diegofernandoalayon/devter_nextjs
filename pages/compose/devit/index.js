import AppLayout from 'components/AppLayout'
import Avatar from 'components/Avatar'
import Button from 'components/Button'
import useUser from 'hooks/useUser'
// import { useState } from 'react'

export default function ComposeDevit () {
  const user = useUser()
  // console.log(user)
  return (
    <>
      <AppLayout>
        {
          user && <Avatar src={user.avatar} alt={user.username} />
        }

        <form>
          <textarea placeholder='¿Qué esta pasando?'></textarea>
          <div>
            <Button>Devitear</Button>
          </div>
        </form>
      </AppLayout>
      <style jsx>{`
        div{
          padding: 15px;
        }
        textarea{
          border: 0;
          font-size: 21px;
          padding: 15px;
          outline: 0;
          min-height: 200px;
          resize: none;
          width: 100%;
        }
      `}</style>
    </>
  )
}
