import Alternating_Content from "../Site_Components/Alternating_Content";
import Cta from "../Site_Components/Cta";
import Accordion from '../Site_Components/Accordion'
import TwoColumn from "../Site_Components/TwoColumn";

const getBlockComponent = ( {__component, ...rest}, index) => {
  let Block;
  switch(__component) {

    case 'site-components.alternating-content' :
      Block = Alternating_Content;
      break;

    case 'site-components.cta' :
      Block = Cta;
      break;

    case 'site-components.accordion' :
      Block = Accordion;
      break;

    case 'site-components.two-column-card' :
      Block = TwoColumn;
      break;
  }

  console.log('comp', __component);


  return Block ? <Block key={`index-${index}`} {...rest}/> : null;
}


const BlockManager = ({ blocks }) => {
  console.log('blocks', blocks)
  return <div> {blocks.map(getBlockComponent)}</div>
}

BlockManager.defaultProps = {
  blocks: [],
}

export default BlockManager;