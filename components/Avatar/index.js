import styles from './styles.module.css'
export default function Avatar ({ src, alt = 'image', width = '120px', text, withText }) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={src} alt={alt}/>
      { withText && <strong>{text || alt}</strong> }
    </div>
  )
}
