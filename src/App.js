
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import LoginSigUp from './Pages/LoginSigUp';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='navbar'>
      <BrowserRouter>
     <Navbar />
     
     <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/metals' element={<ShopCategory category='metals'/>}/>
      <Route path='/punks' element={<ShopCategory category='punks'/>}/>
      <Route path='/rocks' element={<ShopCategory category='rocks'/>}/>
      <Route path='/product' element={<Product/>}>
       <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSigUp/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
