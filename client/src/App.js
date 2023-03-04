import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import './App.css';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import ProductCategory from './components/ProductCategory';
import axiosClient from './api/axiosClient';
import { GetAllAccessory, GetAllIpad, GetAllIphone, GetAllMacbook, GetAllSound, GetAllWatch } from './redux/product';
import { useDispatch } from 'react-redux';
import Login from './components/Login';
import Register from './components/Register';
import { UserConTextProvider } from './pages/UserContext';
function App() {

  const dispatch = useDispatch();
  const [category, setCategory] = useState()

  useEffect(() => {
    axiosClient.get('/category/getall').then(response => {
      if (response.success) {
        setCategory(response.data)
        response.data.forEach(item => {

          if (item.slug === 'mac') {
            dispatch(GetAllMacbook(item.slug))
          } else if (item.slug === 'iphone') {
            dispatch(GetAllIphone(item.slug))
          }
          else if (item.slug === 'ipad') {
            dispatch(GetAllIpad(item.slug))
          }
          else if (item.slug === 'watch') {
            dispatch(GetAllWatch(item.slug))
          }
          else if (item.slug === 'am-thanh') {
            dispatch(GetAllSound(item.slug))
          }
          else if (item.slug === 'phu-kien') {
            dispatch(GetAllAccessory(item.slug))
          }
        })
      }

    })
  }, [])

  return (
    <div className="App">
      <UserConTextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/:header/:slug' element={<ProductDetails />} />
            <Route path='/:slug' element={<ProductCategory />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </UserConTextProvider>
    </div>
  );

}

export default App;
