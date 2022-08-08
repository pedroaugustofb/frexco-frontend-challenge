import styled from 'styled-components'

export const ProductItem = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, 300px);
    grid-template-rows: 1fr 1fr;
    grid-gap: 30px;
    align-items: center;
    justify-items: center;
    justify-content: center;
    padding: 30px 0 30px 0;
    /*@media (max-width: 700px) {
 
        grid-template-columns: repeat(auto-fit, 115px);

    }*/
}
`;

export const CardMenu = styled.div`
  display: grid;
  //grid-template-rows: auto 62px;
  align-items: center;
  //justify-items: center;
  padding:  16px;
  transition: all 0.5s ease 0s;
  width: 280px;
  height: 320px;
  text-align: center;
  background: #fff;
  border: 0.0625rem solid rgba(0, 0, 0, 0.125);
  border-radius: 0.3125rem;
  animation: fadeUp 0.4s;

  @keyframes fadeUp {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /*@media (max-width: 700px) {
    width: 115px;
    height: 150px;
    padding: 5px;
    grid-template-rows: auto auto;
  }*/

  :hover {
    border: 1px solid #75a0bd;
    background: rgba(16, 62, 105, .1)
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  img {
    width: 60%;
    max-height: 99.59px;
  }
  svg {
    max-height: 61.8px;
    width: 60%;
    fill: #103E69;
  }

  i{
    margin: 0 50px 0 50px;
  }
  p {

    font-size: 22px;
    font-family: "Work Sans", sans-serif;
    font-weight: bold;
    color: #162c48;
    @media (max-width: 700px) {
      font-size: 12px;
    }
  
  }
  span {
    font-size: 18px;
    color: #25291C;
    text-align: left;
    font-weight: bold;
  }
`;


export const ProductContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-items: center;
	align-items: center;
	min-height: 100vh;
`;

export const ProductName = styled.div`
display: flex;
justify-content: center;
align-itens: flex-start;
align-self: flex-start;
`

export const CartButtons = styled.div<StyledProps>`
display: flex;
border: 0.0625rem solid rgba(0, 0, 0, 0.125);
opacity: 0.8;
border-radius: 0.3125rem;
margin-left: ${
  props => props.cartProp ?
  '' :
  '5px'
};
background: ${
  props => props.cartProp ?
   '#53a653' :
   '#e73f33'
};
transition: easy-in-out;
:hover{
  cursor: pointer;
  opacity: 1;
}
width: 100%;
`

interface StyledProps{
  cartProp?: boolean;

}

export const SearchComponent = styled.input`
border-radius: 0.3125rem;
width: 30vw;
height: 3rem;
padding: 0.5rem;
`