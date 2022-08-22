import { IMAGE_URL } from '@/config/index'
import { Card, Image } from 'semantic-ui-react'

export default function GearCard(gear) {
  console.log(gear.gear.attributes)

 
  return (

    <Card>
      <Image size='medium' src={`${IMAGE_URL}${gear.gear.attributes.Image.data.attributes.url}`}/>
      <Card.Content>
        <Card.Header>{gear.gear.attributes.name}</Card.Header>
        <Card.Meta>{gear.gear.attributes.Category}</Card.Meta>
        <Card.Description>{gear.gear.attributes.description}</Card.Description>
      </Card.Content>
    </Card>
  )
}