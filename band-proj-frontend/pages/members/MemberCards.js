import { Card } from 'semantic-ui-react'

import MemberCard from './MemberCard';

export default function MemberCards({ members }) {
  return (
    <Card.Group itemsPerRow={2}>
      {members.map(member => {
        return <MemberCard key={member.id} member={member}/>
      })}
    </Card.Group>
  )
}

