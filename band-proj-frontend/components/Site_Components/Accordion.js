import { Accordion} from 'semantic-ui-react'

export default function AccordionComponent(props) {

  const items = props.Accordion_Bellow;

  return (
    <Accordion key={Math.random()} fluid styled defaultActiveIndex={0} panels={items} />
  )
}