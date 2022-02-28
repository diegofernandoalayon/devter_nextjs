// components
import AppLayout from 'components/AppLayout'
import Avatar from 'components/Avatar'
import Button from 'components/Button'
// hooks
import useUser from 'hooks/useUser'
import { useState } from 'react'
import { addDevit } from 'firebasee/client'
import { useRouter } from 'next/router'

const COMPOSE_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1

}

export default function ComposeDevit () {
  const user = useUser()
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN)
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleChange = (event) => {
    const { value } = event.target
    setMessage(value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus(COMPOSE_STATES.LOADING)
    addDevit({
      avatar: user.avatar,
      content: message,
      userId: user.uid,
      username: user.username
    }).then(() => {
      router.push('/home')
    }).catch(err => {
      console.error(err)
      setStatus(COMPOSE_STATES.ERROR)
    })
  }

  const isButtonDisabled = message.length === 0 || status === COMPOSE_STATES.LOADING

  return (
    <>
      <AppLayout>
        {
          user && <Avatar src={user.avatar} alt={user.username} />
        }

        <form onSubmit={handleSubmit}>
          <textarea onChange={handleChange} placeholder='¿Qué esta pasando?' value={message}></textarea>
          <div>
            <Button disabled={isButtonDisabled}>Devitear</Button>
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
