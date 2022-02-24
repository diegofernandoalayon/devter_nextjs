import Avatar from 'components/Avatar'
export default function Devit ({ avatar, username, message, id }) {
  return (
    <>
      <article key={id}>
        <Avatar src={avatar} alt={username} />
        <div>
          <strong >{username}</strong>
          <p>{message}</p>

        </div>
      </article>
      <style jsx>{`
        
        `}</style>
    </>
  )
}
