
//styled-components
import {
    NavbarContainer,
    StyledLink,
    StyledIcon,
    LinkTitle,
} from './navbarStyles'

//interface
interface Props{
  }

const Navbar = (Props: Props) => {

  return (
    <NavbarContainer>
        <StyledLink to='/'>
          <StyledIcon className='icon ion-md-home'/>
          <LinkTitle>Company Name</LinkTitle>
        </StyledLink>
    </NavbarContainer>
  )
}

export default Navbar