import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Screens/Header/Header';
import { Product } from './Screens/Products/Products';
import { ProductDetail } from './Screens/ProductDetail/ProductDetail';
import { RouterConfig } from './Router';

function App() {
  return (
    <div>
      <RouterConfig />
      {/* <Header /> */}
      {/* <Product /> */}
      {/* <ProductDetail /> */}
    </div>
  );
}

export default App;
