import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axiosClient from '../api/axiosClient'
import Category from '../components/Category'
import CopyRight from '../components/CopyRight'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Policy from '../components/Policy'
import ProductCard from '../components/ProductCard'
import Slider from '../components/Slider'
import Store from '../components/Store'
import { GetAllAccessory, GetAllIpad, GetAllIphone, GetAllMacbook, GetAllSound, GetAllWatch } from '../redux/product'


const Home = () => {

  const dispatch = useDispatch()

  const { iphone, macbook, ipad, watch, sound, accessory } = useSelector((state) => state.product)


  useEffect(() => {
    axiosClient.get('/category/getall').then(response => {
      if (response.success) {
        response.data.forEach(item => {

          if (item.title === 'Macbook') {
            dispatch(GetAllMacbook(item._id))
          } else if (item.title === 'Iphone') {
            dispatch(GetAllIphone(item._id))
          }
          else if (item.title === 'Ipad') {
            dispatch(GetAllIpad(item._id))
          }
          else if (item.title === 'Watch') {
            dispatch(GetAllWatch(item._id))
          }
          else if (item.title === 'Sound') {
            dispatch(GetAllSound(item._id))
          }
          else if (item.title === 'Accessory') {
            dispatch(GetAllAccessory(item._id))
          }

        })
      }

    })
  }, [])


  return <React.Fragment>
    <Slider />
    <Policy />
    <div className='container_wdithbg'>

      <ProductCard data={iphone} header={'Iphone'} />
      <ProductCard data={macbook} header={'Macbook'} />
      <ProductCard data={ipad} header={'Ipad'} />
      <ProductCard data={watch} header={'Watch'} />
      <ProductCard data={sound} header={'Âm thanh'} />
      <ProductCard data={accessory} header={'Phụ kiện'} />

      <Store />
      <Footer />
      <CopyRight />

    </div>
  </React.Fragment>
}

export default Home