import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import { getAllIpad } from '../../redux/ipadSlice';
import './index.css';

const IpadList = () => {
  const { ipads } = useSelector((state) => state.ipads)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getAllIpad())
  }, [])
  return (
    <div className="container_productcard-title">
      <h2>iPad</h2>
      <ProductCard data={ipads} />
    </div>
  )
}

export default IpadList