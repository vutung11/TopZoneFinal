import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import ProductDetails from './components/ProductDetails';
import ProductCategory from './components/ProductCategory';
import axiosClient from './api/axiosClient';
import { GetAllAccessory, GetAllIpad, GetAllIphone, GetAllMacbook, GetAllSound, GetAllWatch } from './redux/product';
import { useDispatch, useSelector } from 'react-redux';
import Login from './components/Login';
import Register from './components/Register';
import { UserConTextProvider } from './pages/UserContext';
import Dashboard from './pages/Dashboard';
import Category from './pages/Dashboard/Category';
import Layout from './pages/Layout';
import Form from './pages/Dashboard/Category/Form';
import FormProduct from './pages/Dashboard/Product/FormProduct';
import Product from './pages/Dashboard/Product';

import './App.css';
import { GetAllCategory } from './redux/categories';


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllCategory())
  }, [])



  return (
    <div className="App">
      <UserConTextProvider>
        <BrowserRouter>
          {/* <Header /> */}
          <Routes>
            <Route path='/' element={<Layout />} >
              <Route index element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/:header/:slug' element={<ProductDetails />} />
              <Route path='/:slug' element={<ProductCategory />} />
              <Route path='/dashboard' element={<Dashboard />}>
                <Route path='/dashboard/category' element={<Category />} />
                <Route path='/dashboard/category/add' element={<Form />} />
                <Route path='/dashboard/category/:id' element={<Form />} />
                <Route path='/dashboard/product' element={<Product />} />
                <Route path='/dashboard/product/add' element={<FormProduct />} />
              </Route>
              <Route path='*' element={<Page404 />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserConTextProvider>
    </div>
  );

}

export default App;
