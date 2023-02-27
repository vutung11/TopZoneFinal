import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    const params = useParams()
  return (
    <div>Product
        <h2>Apple Macbook Pro 2015</h2>
        <p>{params.name}</p>
        <p>{params.id}</p>
    </div>
  )
}

export default Product