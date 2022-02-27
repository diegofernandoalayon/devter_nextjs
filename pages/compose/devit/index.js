import AppLayout from 'components/AppLayout'
import Avatar from 'components/Avatar'
import Button from 'components/Button'
import useUser from 'hooks/useUser'
import { useState } from 'react'

export default function ComposeDevit () {
  const user = useUser()
  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    const { value } = event.target
    setMessage(value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(message)
  }
  return (
    <>
      <AppLayout>
        {
          user && <Avatar src={user.avatar} alt={user.username} />
        }

        <form onSubmit={handleSubmit}>
          <textarea onChange={handleChange} placeholder='¿Qué esta pasando?' value={message}></textarea>
          <div>
            <Button disabled={message.length === 0}>Devitear</Button>
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
