import React from 'react'
import { NavLink } from 'react-router-dom';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";



import './index.css';

const ProductCard = (props) => {
  const { data, header } = props

  return (
    <div className='container_productcard'>
      <h2 className='container_productcard-title'>{header}</h2>
      <div className="container_productcard--wrap">
        <Carousel slidesToShow={4} arrows={true}
          prevArrow={<LeftOutlined />}
          nextArrow={<RightOutlined />}>
          {data ? data?.map((item) => (
            <NavLink to={`/${item.slug}`} key={item._id}>
              <div className="container_productcard--box">
                <label className='label'>Mới</label>
                <img src={item.photos[0]} alt="" />
                <div className="container_product--box-content">
                  <h3>{item.title}</h3>
                  <span>{item.price}đ<strike>{item.pricePromo}₫ </strike><small>{item.discount}%</small></span>
                </div>
              </div>
            </NavLink>
          ))
            : <p>Loading ...</p>}

        </Carousel>
      </div>
    </div >
  )

}

export default ProductCard
