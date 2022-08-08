import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavbarContainer = styled.div`
  height: 5rem;
  z-index: 997;
  width: 100%;
  padding: 0;
  transition: left .2s;
  display: flex;
  align-items: center;
  justify-content: center;
  

  box-shadow: 0 3px 5px rgb(0 0 0 / 2%), 0 0 2px rgb(0 0 0 / 5%), 0 1px 4px rgb(0 0 0 / 8%);
  background: rgba(16, 62, 105, .1);
  `
  
export const StyledLink = styled(Link)`
display: flex;
justify-content: space-between;
height 72px;
align-items: center;
color: #1d1d1f;
opacity: 0.8;
margin: 0 3rem;
text-decoration: none;

:hover{
  opacity: 1;
}
`

export const StyledIcon = styled.i`
position: relative;
display: block;
font-size: 30px;
margin: 0 1rem 0 1rem;
`
export const LinkTitle = styled.span`
font-size: 1.4rem;
white-space: nowrap;
line-height: 60px;
text-decoration: none;
`