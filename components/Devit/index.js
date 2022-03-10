import Avatar from 'components/Avatar'
import useDateTimeFormat from 'hooks/useDateTimeFormat'
import useTimeAgo from 'hooks/useTimeAgo'
import Link from 'next/link'
import { useRouter } from 'next/router'
export default function Devit ({ avatar, username, content, id, userId, createdAt, img }) {
  const timeago = useTimeAgo(createdAt)
  const createdAtFormated = useDateTimeFormat(createdAt)
  const router = useRouter()
  const handleArticleClick = (event) => {
    event.preventDefault()
    router.push(`/status/${id}`)
  }
  return (
    <>
      <article onClick={handleArticleClick}>
        <div>
          <Avatar src={avatar} alt={username} />
        </div>
        <section>
          <header>
            <strong >{username}</strong>
            <span> ~ </span>
            <Link href={`/status/${id}`}>
              <a>
                <time title={createdAtFormated}>{timeago}</time>
              </a>
            </Link>
          </header>
          <p>{content}</p>
          {
            img && <img src={img} alt='imagen'/>
          }
          <p>{userId}</p>
        </section>
      </article>
      <style jsx>{`
        article{
          border-bottom: 2px solid #eee;
          display: flex;
          padding:10px 15px;
        }
        article:hover{
          background: #f5f8fa;
          cursor: pointer;
        }
        div {
          padding-right: 10px;
        }
        p {
          line-height: 1.3125;
          margin: 0;
        }
        img{
          border-radius: 10px;
          height: auto;
          width: 100%;
          margin-top: 10px;

        }
        time {
          color: #555;
          font-size: 14px;
        }
        a:hover{
          text-decoration: underline;
          
        }
      `}</style>
    </>
  )
}
