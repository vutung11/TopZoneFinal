import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import { getAllAccessory } from '../../redux/accessorySlice';
import './index.css';

const AccessoryList = () => {

  const dispatch = useDispatch()
  const { accessories } = useSelector((state) => state.accessories);

  useEffect(() => {

    dispatch(getAllAccessory())
  }, [])

  return (
    <div className="container_productcard-title">
      <h2>Phụ kiện</h2>
      <ProductCard data={accessories} />
    </div>
  )
}

export default AccessoryList