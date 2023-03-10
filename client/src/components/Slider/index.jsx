import React from 'react'
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import './index.css';

const Slider = () => {
  return (
    <div className='container_slider'>

      <Carousel
        slidesToShow={1}
        arrows prevArrow={<LeftOutlined />}
        nextArrow={<RightOutlined />}>
        <div className='container_slider--img'>
          <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1920x533/https://cdn.tgdd.vn/2023/02/banner/top-free2880-800-1920x533.png" alt="" />
        </div>
        <div className='container_slider--img'>
          <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1920x533/https://cdn.tgdd.vn/2023/03/banner/wo-top-2880-800-1920x533.png" alt="" />
        </div>
        <div className='container_slider--img'>
          <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1920x533/https://cdn.tgdd.vn/2023/02/banner/Mac-2880-800-1920x533-1.png" alt="" />
        </div>
        <div className='container_slider--img'>
          <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1920x533/https://cdn.tgdd.vn/2023/03/banner/iPad10-2880-800-1920x533.png" alt="" />
        </div>
      </Carousel>
    </div>
  )
}

export default Slider