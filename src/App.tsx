import { BrowserRouter, Routes, Route} from 'react-router-dom'

//Components
import Router from './Router';

function App() {

  //localStorage.setItem('products', JSON.stringify([]))
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Router/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
