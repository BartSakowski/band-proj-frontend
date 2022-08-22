import styles from '@/styles/Showcase.module.css'
import {IMAGE_URL} from '@/config/index'


export default function Hero({hero}) {

  return (
    <div className={styles.showcase} 
      style={{backgroundImage: `url(${IMAGE_URL}${hero.background_image.data.attributes.url})` }}
    >
      <h1>{hero.Title}</h1>
      <h2>{hero.subtext}</h2>
    </div>
  )
}


