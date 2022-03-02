import Avatar from 'components/Avatar'
import useTimeAgo from 'hooks/useTimeAgo'
export default function Devit ({ avatar, username, content, id, userId, createdAt }) {
  const timeago = useTimeAgo(createdAt)
  return (
    <>
      <article>
        <div>
          <Avatar src={avatar} alt={username} />
        </div>
        <section>
          <header>
            <strong >{username}</strong>
            <span> . </span>
            <date>{timeago}</date>
          </header>
          <p>{content}</p>
          <p>{userId}</p>
        </section>
      </article>
      <style jsx>{`
        article{
          border-bottom: 2px solid #eee;
          display: flex;
          padding:10px 15px;
        }
        div {
          padding-right: 10px;
        }
        p {
          line-height: 1.3125;
          margin: 0;
        }
        date {
          color: #555;
          font-size: 14px;
        }
      `}</style>
    </>
  )
}
