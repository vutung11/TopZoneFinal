import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axiosClient from '../api/axiosClient'
import Category from '../components/Category'
import CopyRight from '../components/CopyRight'
import Footer from '../components/Footer'
import Policy from '../components/Policy'
import ProductCard from '../components/ProductCard'
import Slider from '../components/Slider'
import Store from '../components/Store'
import { GetAllAccessory, GetAllIpad, GetAllIphone, GetAllMacbook, GetAllSound, GetAllWatch } from '../redux/product'


const Home = () => {

  const dispatch = useDispatch()
  const { categories } = useSelector((state) => state.category);
  console.log(categories)
  const { iphone, mac, ipad, watch, sound, accessory } = useSelector((state) => state.product)
  useEffect(() => {
    categories.forEach(item => {
      console.log(item.slug)

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
  }, [])



  return <React.Fragment>
    <Slider />
    <Policy />
    <div className='container_wdithbg'>
      <Category category={categories} />
      <ProductCard data={iphone} header={'Iphone'} />
      <ProductCard data={mac} header={'Mac'} />
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