import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom'
import { GetAllAccessory, GetAllIpad, GetAllIphone, GetAllMacbook, GetAllSound, GetAllWatch } from '../../redux/product';
import ProductCard from '../ProductCard';


import './index.css';

const ProductCategory = () => {

  const dispatch = useDispatch();
  const { iphone, macbook, ipad, watch, sound, accessory } = useSelector((state) => state.product)
  let { title } = useParams()
  const [category, setCategory] = useState(title)

  useEffect(() => {

    if (title === 'Macbook') {
      dispatch(GetAllMacbook(title))
    } else if (title === 'Iphone') {
      dispatch(GetAllIphone(title))
    }
    else if (title === 'Ipad') {
      dispatch(GetAllIpad(title))
    }
    else if (title === 'Watch') {
      dispatch(GetAllWatch(title))
    }
    else if (title === 'Sound') {
      dispatch(GetAllSound(title))
    }
    else if (title === 'Accessory') {
      dispatch(GetAllAccessory(title))
    }

  }, [])





  return (
    <div className='productcategory_container'>
      {/* <SliderCategory /> */}

      {title ? <ProductCard data={sound} /> : <p>Loading...</p>}

    </div>
  )
}

export default ProductCategory