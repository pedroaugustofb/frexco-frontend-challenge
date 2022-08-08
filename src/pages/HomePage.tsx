import { useRef, useState } from 'react'
import {ProductContainer,  CardMenu, ProductItem, ProductName, CartButtons, SearchComponent } from '../components/GridCards/styles'
import { StyledIcon } from '../components/navbar/navbarStyles'
import { All } from '../assets/fruits/all'
import { Toast } from 'primereact/toast'
import { Link } from 'react-router-dom'
import { Button } from 'primereact/button'
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import { Toolbar } from 'primereact/toolbar'
import { InputText} from 'primereact/inputtext'

/*
import { useEffect } from 'react'
import { FruityViceApi } from '../Api'
*/


interface Products{
  name: string,
  quant: number
}

interface Fruits {
  genus: string,
  name: string,
  id: number,
  family: string,
  order: string,
  nutritions: {
    carbohydrates: number,
    protein: number,
    fat: number,
    calories: number,
    sugar: number,
  }
}
interface Props{

}

const HomeController = (props: Props) => {

  const toast = useRef(null);
  const [search, setSearch] = useState<string>('')
  const data = All;
  //const [data, setData] = useState<Fruits[]>([])
  
  /* No 'Access-Control-Allow-Origin' header is present on the requested resource na API
      é possivel fazer a request me postman ou insomnia, mas pelo browser não ( CORS ).
      então estou utilizando a resposta do api/fruit/all no arquivo All.
      
      useEffect( () => {
        FruityViceApi.loadFruits().then(res => {
          setData(res)
        })
      },[])
      */


  const filteredData = search.length > 0  ? data.filter(fruit => fruit.name.includes(search[0].toUpperCase() + search.substring(1)) ) : [];

  const onChangeCart = (product: string) =>{

    if(localStorage.getItem('products') === null) localStorage.setItem('products', JSON.stringify([]))
    let products: any = localStorage.getItem('products')
    products = JSON.parse(products)

    let notFound: boolean = true;


    if(products.length === 0) products.push({name: product, quant: 1})

    else{
      products.forEach( (elem: Products) => {
        if(elem.name === product){
          notFound = false;
          elem.quant = elem.quant + 1;
        }
      })
    }

    if(notFound) products.push({name: product, quant: 1})
    
    localStorage.setItem('products', JSON.stringify(products))

    // @ts-ignore
    toast.current.show({severity:'success', summary: `${product} has been added to cart!`, detail:``, life: 3000});
  }


  return (
    <>
      <Toast ref={toast} /> { /* Using Toast by primereact/toast to show sucess after actions */ } 

      <Toolbar style={{display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '25px 7rem 0 7rem', justifyContent: 'space-between'}}
      left={(
        <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText className='p-inputtext-bg' value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." style={{width: '25vw'}}/>
        </span>
      )}
      right={(
        <Link to="/cart" style={{textDecoration: 'none'}}>
            <Button label="Go to your cart" icon="pi pi-shopping-cart" iconPos='right' className="p-button-text p-button-bg" />
        </Link>
      )}
      />
      
      <ProductContainer>
        {
          search.length > 0 ? (
            <ProductItem>
              {
              filteredData.map( (elem: Fruits) => {
                return(
                  <CardMenu key={elem.name}>
                    <ProductName>
                      <p>{elem.name}</p>
                    </ProductName>

                    <span>Carbohydrates: {elem.nutritions.carbohydrates}</span>
                    <span>Protein: {elem.nutritions.protein}</span>
                    <span>Fat: {elem.nutritions.fat}</span>
                    <span>Calories: {elem.nutritions.calories}</span>
                    <span>Sugar: {elem.nutritions.sugar}</span>
                    <div style={{ marginTop: '5px', borderBottom: '1px solid #d7d7d7'}}></div>

                    <div style={{marginTop: '20px'}}>
                      <CartButtons className='p-button-success' cartProp onClick={() => onChangeCart(elem.name)}>
                        <StyledIcon className='icon ion-md-add' />
                      </CartButtons>
                    </div>
                  </CardMenu>
                )
              })}
            </ProductItem>
          ):(
            <ProductItem>
              {
              data.map( (elem: Fruits) => {
                return(
                  <CardMenu key={elem.name}>
                    <ProductName>
                      <p>{elem.name}</p>
                    </ProductName>

                    <span>Carbohydrates:   {elem.nutritions.carbohydrates}  </span>
                    <span>Protein:   {elem.nutritions.protein}              </span>
                    <span>Fat:   {elem.nutritions.fat}                      </span>
                    <span>Calories:   {elem.nutritions.calories}            </span>
                    <span>Sugar:   {elem.nutritions.sugar}                  </span>
                    <div style={{ marginTop: '5px', borderBottom: '1px solid #d7d7d7'}}></div>

                    <div style={{marginTop: '20px'}}>
                      <CartButtons cartProp onClick={() => onChangeCart(elem.name)}>
                        <StyledIcon className='icon ion-md-add' />
                      </CartButtons>
                    </div>
                  </CardMenu>
                )
              })}
            </ProductItem>
          )
        }
      </ProductContainer>
    </>
  )
}

export default HomeController