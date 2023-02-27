import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import { getAllWatch } from '../../redux/watchSlice';
import './index.css';

const WatchList = () => {
  const dispatch = useDispatch()
  const { watches } = useSelector((state) => state.watches)

  useEffect(() => {
    dispatch(getAllWatch())
  })

  return (
    <div className="container_productcard-title">
      <h2>Watch</h2>
      <ProductCard data={watches} />
    </div>
  )
}

export default WatchList