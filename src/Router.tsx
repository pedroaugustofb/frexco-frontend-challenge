import { useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

// Rotas Públicas //
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage';
import Footer from './components/footer/Footer';

/*
// @ts-ignore 
const PrivateRoute = ({ children, redirectTo }) =>{
  const isAuthenticated = sessionStorage.getItem("token") !== null;
  return isAuthenticated ? children : <Navigate to={redirectTo} />
};
*/

type Props = {
}

const Router = (props: Props) =>{

    let location = useLocation();
    let path: string = location.pathname;
    let element: JSX.Element;

    switch(path){
      // *Rotas Públicas* //
        case '/':
            element = <HomePage/>
            break;
        case '/cart':
            element = <CartPage />
            break;
        default:
            return(<Navigate to="/" />)
    }

    return(
      <>
        <Navbar/>
        {element}
        {path !== '/cart' && (<Footer/>)}
      </>
    )
}

export default Router