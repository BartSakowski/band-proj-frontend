import Layout from '@/components/Layout'
import BlockManager from '@/components/BlockManager'
import { API_URL } from '@/config/index'


export default function AboutPage({about_hero_props, zone_props}) {
  
  
  const zones = (zone_props.attributes.about_page_content);
  console.log(zones)
  return (
    <Layout hero={about_hero_props.attributes.hero}>
      {zones && <BlockManager blocks={zones}/>}
    </Layout>
  )
}


export async function getStaticProps() {
  const heroRes = await fetch(`${API_URL}/about-page?populate[hero][populate]=*`)
  const json = await heroRes.json();
  const about_hero_props = json.data;

  const zonePop = await fetch(`${API_URL}/about-page?populate[about_page_content][populate]=*`)

  const jsonZone = await zonePop.json();
  const zone_props = jsonZone.data;

  console.log(zone_props)

  return {
    props: { about_hero_props, zone_props },
    revalidate: 1,
  }
}