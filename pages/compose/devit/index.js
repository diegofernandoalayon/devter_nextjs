// components
import AppLayout from 'components/AppLayout'
import Avatar from 'components/Avatar'
import Button from 'components/Button'
// hooks
import useUser from 'hooks/useUser'
import { useState, useEffect } from 'react'
import { addDevit, fetchLatestDevits, getURL, uploadImage } from 'firebasee/client'
import { useRouter } from 'next/router'

const COMPOSE_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1

}
const DRAG_IMAGE_STATES = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3
}

export default function ComposeDevit () {
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN)
  const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE)
  const [task, setTask] = useState(null)
  const [imgURL, setImgURL] = useState(null)

  const router = useRouter()
  const user = useUser()

  useEffect(() => {
    if (task) {
      const onProgress = () => {}
      const onError = () => {}
      const onComplete = () => {
        console.log('oncomplete')
        getURL(task)
          .then((downloadURL) => {
            setImgURL(downloadURL)
          })
      }
      task.on('state_changed', onProgress, onError, onComplete)
    }
  }, [task])

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
      username: user.username,
      img: imgURL
    }).then(() => {
      router.push('/home')
    }).catch(err => {
      console.error(err)
      setStatus(COMPOSE_STATES.ERROR)
    })
    fetchLatestDevits()
  }

  const handleDragEnter = event => {
    event.preventDefault()
    setDrag(DRAG_IMAGE_STATES.DRAG_OVER)
  }
  const handleDragLeave = event => {
    event.preventDefault()
    setDrag(DRAG_IMAGE_STATES.NONE)
  }
  const handleDrop = event => {
    event.preventDefault()
    // console.log(event)
    // console.log(event.dataTransfer.files[0])
    setDrag(DRAG_IMAGE_STATES.NONE)
    const file = event.dataTransfer.files[0]
    const task = uploadImage(file)
    console.log(task)
    setTask(task)
  }

  const isButtonDisabled = message.length === 0 || status === COMPOSE_STATES.LOADING

  return (
    <>
      <AppLayout>
        <section>
          <div className='avatar-container'>
            {
              user && <Avatar src={user.avatar} alt={user.username} />
            }
          </div>
          <div className='form-container'>
            <form onSubmit={handleSubmit}>
              <textarea
                onChange={handleChange}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                placeholder='¿Qué esta pasando?'
                value={message}
                ></textarea>
                {
                  imgURL && (

                    <footer>
                      <img src={imgURL} alt="queso" />
                      <button onClick={() => setImgURL(null)}>X</button>
                    </footer>
                  )
                }

              <div>
                <Button disabled={isButtonDisabled}>Devitear</Button>
              </div>
            </form>
          </div>
        </section>
      </AppLayout>
      <style jsx>{`
        footer{
          position: relative;
        }
        button{
          background: rgba(0,0,0,0.8);
          font-size:18px;
          color: white;
          border-radius: 100%;
          border: 0;
          cursor: pointer;
          height: 30px;
          position: absolute;
          right: 15px;
          top: 15px;
          width: 30px; 
        }
        div{
          padding: 15px;
        }
        .avatar-container{
          padding: 4px 0 0 4px;
        }
        .form-container{
          flex: auto;
        }
        form{

        }
        textarea{
          border: ${drag === DRAG_IMAGE_STATES.DRAG_OVER ? '3px dashed #09f' : '3px solid transparent'};
          border-radius: 10px;

          font-size: 21px;
          padding: 15px;
          outline: 0;
          min-height: 200px;
          resize: none;
          width: 100%;
        }
        section{
          display: flex;
          align-items: flex-start;
        }
        img{
          border-radius: 10px;
          height: auto;
          width: 100%;
        }
      `}</style>
    </>
  )
}
