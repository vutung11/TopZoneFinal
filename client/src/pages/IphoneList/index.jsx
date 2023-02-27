import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import { getAllIphone } from '../../redux/iphoneSlice';

import './index.css';

const IphoneList = () => {

  const { iphones } = useSelector((state) => state.iphones)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAllIphone())
  }, [])

  return (
    <div className="container_productcard-title">
      <h2>iPhone</h2>
      <ProductCard data={iphones} />
    </div>
  )
}

export default IphoneList