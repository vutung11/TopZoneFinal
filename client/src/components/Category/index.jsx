import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';


import './index.css';
const Category = () => {
  const [category, setCategory] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:1337/api/categories');
      const responseJSON = await response.json();
      setCategory(responseJSON)
    }
    fetchData()
  }, [])

  return (
    <div className='container_category'>
      {category && category.data && category.data.map((item, idx) => (
        <NavLink to={`/${item.attributes.category}`} key={idx}>
          <div className="container_category--box">
            <img className='iphone' src={item.attributes.image_category} alt="" />
            <p>{item.attributes.name_category}</p>
          </div>
        </NavLink>
      ))}
    </div>
  )
}

export default Category