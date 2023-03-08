import React from 'react'
import { useSelector } from 'react-redux'
import Category from '../components/Category'
import CopyRight from '../components/CopyRight'
import Footer from '../components/Footer'
import Policy from '../components/Policy'
import ProductCard from '../components/ProductCard'
import Slider from '../components/Slider'
import Store from '../components/Store'


const Home = () => {

  const { categories } = useSelector((state) => state.category);
  const { iphone, mac, ipad, watch, sound, accessory } = useSelector((state) => state.product)


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