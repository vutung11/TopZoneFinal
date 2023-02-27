import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../components/ProductCard'
import { getAllMacbook } from '../../redux/macbookSlice'
import './index.css'

const MacList = () => {
  const dispatch = useDispatch()
  const { macbooks } = useSelector((state) => state.macbooks)


  useEffect(() => {
    dispatch(getAllMacbook())
  }, [])

  return (
    <div className="container_productcard-title">
      <h2>Mac</h2>
      <ProductCard data={macbooks} />
    </div>
  )
}

export default MacList