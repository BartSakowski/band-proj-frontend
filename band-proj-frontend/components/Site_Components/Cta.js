import { IMAGE_URL } from "@/config/index"
import { Segment, Container } from "semantic-ui-react"
import styles from '@/styles/CTA.module.css'


export default function Cta(props) {

  console.log('cta', props)
  return (
    <Segment 
      className={styles.ctaComponent}
      textAlign="center"
      style={{
        backgroundImage: `url(${IMAGE_URL}${props.image.data.attributes.url})`,
        backgroundSize: 'cover',
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
      }}
    >
      <Container className={styles.textContainer}>
        <h2>{props.title}</h2>
        <h3>{props.text}</h3>
      </Container>
    </Segment>
  )
}