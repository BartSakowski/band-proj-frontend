import styles from '@/styles/Alternating.module.css'

import { IMAGE_URL } from '@/config/index';
import { Grid, Image, Segment } from 'semantic-ui-react'

export default function Alternating_Content( props ) {
  return (
    <Segment className={styles.alternatingContentMain}>
      
      <Grid 
        columns={2} 
        className={styles.acGrid}
        relaxed= 'very'
        style={{
          flexDirection: props.image_on_left ? 'row' : 'row-reverse'
        }}
      >

        <Grid.Column className={styles.acImage}
          style={{
            borderLeft: props.image_on_left ? 'none' : '1px solid rgba(34,36,38,.15)'}}
        >

          <div className={styles.imageColumn}>
            <Image src={`${IMAGE_URL}${props.image.data.attributes.url}`} />
          </div>

        </Grid.Column>
        
        <Grid.Column className={styles.textColumnParent}
          style={{
            borderLeft: props.image_on_left ? '1px solid rgba(34,36,38,.15)' : 'none'}}
        >
          <div className={styles.textColumn}>
            <h2>{props.component_title}</h2>
            <h3>{props.component_text}</h3>
          </div>

        </Grid.Column>
      </Grid>
    </Segment>
  )
}