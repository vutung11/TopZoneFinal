import React from 'react'
import { useSelector } from 'react-redux';
import SliderCategory from '../SliderCategory'
import { useParams } from 'react-router-dom'

import './index.css';
import ListingProduct from '../ListingProduct';

const ProductCategory = () => {

  const { iphone, mac, ipad, watch, sound, accessory } = useSelector((state) => state.product);
  let { slug } = useParams();
  let data = [];

  if (slug === 'mac') {
    data = mac
  } else if (slug === 'iphone') {
    data = iphone;
  }
  else if (slug === 'ipad') {
    data = ipad;
  }
  else if (slug === 'watch') {
    data = watch;
  }
  else if (slug === 'am-thanh') {
    data = sound;
  }
  else if (slug === 'phu-kien') {
    data = accessory;
  }

  return (
    <div className='productcategory_container'>
      <SliderCategory />
      {slug ? <ListingProduct data={data} slug={slug} /> : <p>Loading ...</p>}


    </div>
  )
}

export default ProductCategory