import React from 'react'
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import './index.css';

const SliderCategory = () => {
  return (
    <div className='container_slidercategory'>

        <Carousel
        slidesToShow={1}
        arrows prevArrow={<LeftOutlined />}
        nextArrow={<RightOutlined />}> 
            <div className='container_slidercategory--img'>
                <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75,s_1170x300/https://cdn.tgdd.vn/2022/11/banner/ip13-2400-600-1920x480.png" alt="" />
            </div>
            <div className='container_slidercategory--img'>
                <img src="https://cdn.tgdd.vn/2022/11/banner/2400-60012-1920x480.gif" alt="" />
            </div>
            
    </Carousel>
    </div>
  )
}

export default SliderCategory