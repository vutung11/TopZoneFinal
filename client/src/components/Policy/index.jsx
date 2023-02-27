import React from 'react'
import { RightCircleOutlined } from '@ant-design/icons';

import './index.css';

const Policy = () => {
  return (
    <div className='container_bg'>
        <div className='container_policy'>
            <div className="container_policy--box">
                <RightCircleOutlined />
                <p>Mẫu mã đa dạng<br/> chính hãng</p>
            </div>
            <div className="container_policy--box">
                <RightCircleOutlined />
                <p>Giao hàng toàn quốc</p>
            </div>
            <div className="container_policy--box">
                <RightCircleOutlined />
                <p>Bảo hành có cam kết <br/>tới 12 tháng</p>
            </div>
            <div className="container_policy--box">
                <RightCircleOutlined />
                <p>Có thể đổi trả tại <br/> Thegioididong và DienmayXANH</p>
            </div>
        </div>
    </div>
  )
}

export default Policy