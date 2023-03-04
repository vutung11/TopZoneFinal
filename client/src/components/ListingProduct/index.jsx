import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import axiosClient from '../../api/axiosClient';
import { GetAllIphone, updateAccessory, updateIpad, updateIphone, updateMac, updateSound, updateWatch } from '../../redux/product';

import './index.css';

const ListingProduct = (props) => {
  const { data, slug: slugCategory } = props;
  const dispatch = useDispatch();
  const [page, setPage] = useState(2);
  const [limit, setLimit] = useState(3);

  const handleLoad = () => {

    axiosClient.post(`/product/category?page=${page}&limit=${limit}`, { slug: slugCategory }).then(response => {
      if (slugCategory === 'iphone') {
        setPage(prev => prev + 1);
        dispatch(updateIphone(response.data))
      } else if (slugCategory === 'mac') {
        dispatch(updateMac(response.data))
      } else if (slugCategory === 'ipad') {
        dispatch(updateIpad(response.data))
      } else if (slugCategory === 'watch') {
        dispatch(updateWatch(response.data))
      } else if (slugCategory === 'am-thanh') {
        dispatch(updateSound(response.data))
      } else if (slugCategory === 'phu-kien') {
        dispatch(updateAccessory(response.data))
      }
    });

  }

  return (
    <div className='container_listingproduct'>
      <div className="container_listingproduct--wrap">

        {data ? data?.map((item) => (
          <NavLink to={`/${slugCategory}/${item.slug}`} key={item._id}>
            <div className="container_listingproduct--box">
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
        <div className='box_learn_more'>
          <button className='learn_more' onClick={handleLoad}>Xem thêm</button>
        </div>

      </div>
    </div >
  )

}

export default ListingProduct
