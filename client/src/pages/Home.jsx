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


const Home = () => {

  const dispatch = useDispatch()
  const [category, setCategory] = useState([])
  const { iphone, mac, ipad, watch, sound, accessory } = useSelector((state) => state.product)

  useEffect(() => {
    axiosClient.get('/category/getall').then(response => {
      if (response.success) {
        setCategory(response.data)
      }
    })
  }, [])


  return <React.Fragment>
    <Slider />
    <Policy />
    <div className='container_wdithbg'>
      <Category category={category} />
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