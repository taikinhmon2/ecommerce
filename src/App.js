import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from '@popperjs/core';
import { Routes, Route } from 'react-router-dom'

import Navbar from './Component/navbar';
import Home from './Component/home';
import Products from './Component/products';
import Product from './Component/product';
import Cart from './Component/cart';
import { useSelector} from 'react-redux';
import Selector from './redux/selector'
function App() {
  const product = useSelector(Selector)
  localStorage.setItem('product', JSON.stringify(product))
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/ecommerce' element = {<Home/>} />
        <Route path='/ecommerce/products' element = {<Products/>} />
        <Route path='/ecommerce/products/:id' element = {<Product/>}/>
        <Route path='/ecommerce/cart' element = {<Cart/>}/>
      </Routes>
    </>
  );
}

export default App;
