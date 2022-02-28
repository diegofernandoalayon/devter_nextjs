import Avatar from 'components/Avatar'
export default function Devit ({ avatar, username, content, id, userId, createdAt }) {
  return (
    <>
      <article>
        <div>
          <Avatar src={avatar} alt={username} />
        </div>
        <section>
          <header>
            <strong >{username}</strong>
            {/* <date>{createdAt}</date> */}
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
      `}</style>
    </>
  )
}
