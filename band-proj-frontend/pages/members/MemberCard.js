import { Card, Image } from 'semantic-ui-react'
import { IMAGE_URL } from '@/config/index';
import Link from 'next/link';


export default function MemberCard({member}) {
  const { attributes } = member;
  // console.log(member);
  return (
    <Card>
      <Image src={`${IMAGE_URL}${attributes.profile_picture.data.attributes.url}`}/>
      <Card.Content>
        <Card.Header>{attributes.name}</Card.Header>
        <Card.Meta>{attributes.instrument}</Card.Meta>

        <Link passHref href={`/members/${encodeURIComponent(member.id)}`}>
          <a>
            Checkout {attributes.name} gear!
          </a>
        </Link>
        
      </Card.Content>
    </Card>
 
  )
}