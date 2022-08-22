import Layout from '@/components/Layout'
import BlockManager from '@/components/BlockManager';

import {API_URL} from '@/config/index'


export default function Home({ home_props, zone_props }) {
  const zones = (zone_props.attributes.Zones);

  console.log('pass zones', zones);

  return (
    <Layout hero={home_props.attributes.Hero}>
      {zones && <BlockManager blocks={zones}/>}
    </Layout>
  )
}


export async function getStaticProps() {
  const res = await fetch(`${API_URL}/home?populate[Hero][populate]=*`);
  const zonePop = await fetch(`${API_URL}/home?populate[Zones][populate]=*`);

  
  const json = await res.json();
  const home_props = json.data;
  
  const jsonZone = await zonePop.json();
  const zone_props = jsonZone.data;
  
  console.log(zone_props.Zones);
  return {
    props: { home_props, zone_props },
    revalidate: 1,
  }
}