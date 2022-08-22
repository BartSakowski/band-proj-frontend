import Layout from "@/components/Layout"
import { API_URL } from "../../config"

import MemberCards from "./MemberCards"

export default function Members( {home_props, membs_props} ) {
  return (
    <Layout hero={home_props.attributes.hero}>
      <h2>Band Members</h2>
      <MemberCards members={membs_props}/>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/all-band-member?populate[hero][populate]=*`);
  const json = await res.json();
  const home_props = json.data;

  const membs = await fetch(`${API_URL}/band-members?populate=*`);
  const membsJson = await membs.json();
  const membs_props = membsJson.data;

  console.log(membs_props)
  return {
    props: { home_props, membs_props }
  }
}