import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './Screens/Header/Header';
import { Product } from './Screens/Products/Products';
import { ProductDetail } from './Screens/ProductDetail/ProductDetail';
import { NavbarCom } from './components/Navbar/Navbar';

import Logo from './assets/logo.png';

export const RouterConfig = () => {
  return (
    <Router>
      <nav>
        <NavbarCom
          img={Logo}
          navLinks={[{ name: 'Home', link: '/' }, { name: 'Products', link: 'products' }, { name: 'Cart', link: 'cart' }]}
        />
      </nav>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="products" element={<Product />} />
        <Route path="products/:name" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}