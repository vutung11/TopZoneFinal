import React from 'react'

import './index.css';
const Footer = () => {
  return (
    <div className='container_footer--bg'>
        <div className="container_footer">
            <div className="container_footer--logo">
            <img src='https://cdn.tgdd.vn/mwgcart/topzone/images/mobile/logo-video.png?v=4'  alt="" />
            </div>
            <div className="container_footer--content">
                <div className="container_footer--content-box">
                    <p className='container_footer--content-box-title'>Tổng đài</p>
                   <p>Mua hàng: <span> 1900.9696.42 </span>(7:30 - 22:00)</p>
                   <p>CSKH: <span>1900.9868.43 </span>(8:00 - 21:30)</p>
                   <p> Kỹ thuật: <span>1900.8668.54 </span>(7:30 - 22:00)</p> 
                </div>
                <div className="container_footer--content-box">
                    <p className='container_footer--content-box-title'>Hệ thống cửa hàng</p>
                    <p>Xem 97 cửa hàng</p>
                    <p>Nội quy cửa hàng</p>
                    <p>Chất lượng phục vụ</p>
                    <p>Chính sách bảo hành, đổi trả</p>
                </div>
                <div className="container_footer--content-box">
                <p className='container_footer--content-box-title'>Hỗ trợ khách hàng</p>
                    <p>Điều kiện giao dịch chung</p>
                    <p>Hướng dẫn mua hàng online</p>
                    <p>Chính sách giao hàng</p>
                    <p>Hướng dẫn thanh toán</p>
                </div>
                <div className="container_footer--content-box">
                <p className='container_footer--content-box-title'>Về thương hiện Topzone</p>
                <p><span>Tích điểm Quà Tặng VIP</span> </p>
                <p>Giới thiệu Topzone</p>
                <p>Bán hàng doanh nghiệp</p>
                <p>Chính sách bảo mật thông tin</p>
                <p>Xem bản mobile</p>
                </div>
                <div className="container_footer--content-box">
                <p className='container_footer--content-box-title'>Trung tâm bảo hành TopCare</p>
                    <p>Giới thiệu TopCare</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer