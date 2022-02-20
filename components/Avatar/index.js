export default function Avatar ({ src, alt = 'image', width = '120px' }) {
  return (
    <>
      <img src={src} alt={alt}/>
      <style jsx>{`
        img {
          border-radius: 100%;
          width: ${width};
        }
      `}</style>
    </>
  )
}
