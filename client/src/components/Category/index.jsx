import React from 'react'
import { NavLink } from 'react-router-dom';

import './index.css';

const Category = (props) => {
  const { category } = props

  return (
    <div className='container_category'>
      {category && category.length > 0 && category.map((el, idx) => (
        <NavLink to={`/${el.title}`} key={idx} >
          <div className="container_category--box">
            <img className='iphone' src={el?.image} alt="" />
            <p>{el?.title}</p>
          </div>
        </NavLink>
      ))}
    </div>
  )
}

export default Category