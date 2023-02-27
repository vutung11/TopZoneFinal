import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import { getAllSound } from '../../redux/soundSlice';
import './index.css';

const SoundList = () => {

  const dispatch = useDispatch()

  const { sounds } = useSelector((state) => state.sounds)

  useEffect(() => {
    dispatch(getAllSound())
  })

  return (
    <div className="container_productcard-title">
      <h2>Âm thanh</h2>
      <ProductCard data={sounds} />
    </div>
  )
}

export default SoundList