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
                <img src="https://cdn.tgdd.vn/2022/11/banner/khaitruong-new-2880-800-1920x533-1.png" alt="" />
            </div>
            <div className='container_slider--img'>
                <img src="https://cdn.tgdd.vn/2022/11/banner/2880-80003-1920x533.gif" alt="" />
            </div>
            <div className='container_slider--img'>
            <img src="https://cdn.tgdd.vn/2022/11/banner/2880-800-1920x533-3.png" alt="" />
            </div>
            <div className='container_slider--img'>
            <img src="https://cdn.tgdd.vn/2022/11/banner/2880-800-1920x533-1.png" alt="" />
            </div>
    </Carousel>
    </div>
  )
}

export default Slider