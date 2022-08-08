import { NavbarContainer } from '../navbar/navbarStyles'


type Props = {}

const Footer = (props: Props) => {
  return (
    <NavbarContainer style={{display: 'flex', flexDirection: 'column',position: 'relative', bottom: '0'}}>
        <h4 style={{marginBottom: 0}}>Developed by: Pedro Augusto Foltram Bezerra</h4>
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <h6 style={{margin: '5px',}}><a href='https://www.linkedin.com/in/pedrofoltram/'>https://www.linkedin.com/in/pedrofoltram/</a></h6>
            <p style={{margin: 0}}>||</p>
            <h6 style={{margin: '5px',}}><a href='https://github.com/pedroaugustofb'>https://github.com/pedroaugustofb</a></h6>
        </div>
    </NavbarContainer>
  )
}

export default Footer