import LayoutNoHero from "@/components/LayoutNoHero"
import { API_URL } from "@/config/index";
import GearCard from "./GearCard";
import { Card, Container, Header } from "semantic-ui-react";
import {useState} from 'react'

export default function MemberPage({member_props, gear_props}) {


  const [ member ] = useState({member_props})
 
  // console.log(member)
  // const { member } = member_props
  return (
    <LayoutNoHero>
      <Container>
        <Header as='h1'>{member_props.attributes.name} - {member_props.attributes.instrument}</Header>

        <Card.Group itemsPerRow={3}>

          {gear_props.attributes.gears.data.map(gear => {
            console.log('gear', gear)
            if (gear.length === 0) {
              return(
                <p>{member_props.attributes.name} has no gear added!</p>
              )
            } else {

              return <GearCard gear={gear}/>
            }
          })}  
        </Card.Group>

      </Container>
      
    </LayoutNoHero>
  )
}

export async function getStaticPaths() {

  const res = await fetch(`${API_URL}/band-members/`)
  const json = await res.json()
  const members = json.data;

  const paths = members.map(member => ({
    params: {slug: member.attributes.name }
  }));


  console.log(paths)
  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({params: {slug}}) {
  const res = await fetch(`${API_URL}/band-members/${slug}?populate=*`)
  const json = await res.json();
  const member_props  = json.data;


  console.log(member_props);
  const gearRes = await fetch(`${API_URL}/band-members/${slug}?populate[gears][populate]=*`);
  const gearJson = await gearRes.json();
  const gear_props = gearJson.data;

  console.log(gear_props);

  return {
    props: {member_props, gear_props},
  }
}

