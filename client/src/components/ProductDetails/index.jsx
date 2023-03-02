import { Button, Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../Loading';
import './index.css';
import { GetProductBySlug } from '../../redux/product';

const ProductDetails = () => {
  const { productbyslug } = useSelector((state) => state.product)
  const { slug } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetProductBySlug(slug))
  }, [])

  return (<React.Fragment>

    {

      <div className='productdetail_container'>
        <div className="productdetail_container-bg">
          <div className="productdetail_container_box">
            <div className="productdetail_container_box-left">
              <img src={productbyslug?.photos[0]} alt="" />
              <div className="product_container_box-left--media">
                <Carousel arrows={true}
                  slidesToShow={6}
                  prevArrow={<LeftOutlined />}
                  nextArrow={<RightOutlined />}>
                  {productbyslug?.photos.length > 0 && productbyslug.photos.map((image, index) => (
                    <img key={index} src={image} />
                  ))}
                </Carousel>
              </div>
            </div>
            <div className="productdetail_container_box-right">
              <div className="productdetail_container_box-right-content">
                <h3 className='title'>{productbyslug?.title}</h3>
                <p className='price-title'>Giá và khuyến mãi tại: Hồ Chí Minh</p>
                <span>{productbyslug?.pricePromo}đ</span><strike>{productbyslug?.price}₫ </strike><small>-{productbyslug?.discount}%</small>
                <p className='gigabyte'>Dung lượng</p>
                <p className='gigabyte-number'>128GB</p>
                <p className='color'>Màu: Xanh dương</p>
                <div className="productdetail_container_box-right-content--color">
                  <div className="productdetail_container_box-right-content--color-box green"></div>
                  <div className="productdetail_container_box-right-content--color-box gray"></div>
                  <div className="productdetail_container_box-right-content--color-box white"></div>
                  <div className="productdetail_container_box-right-content--color-box red"></div>
                  <div className="productdetail_container_box-right-content--color-box gray2"></div>
                </div>

                <div className="productdetail_container_box-right-content--promotion">
                  <span>Khuyến mãi</span>
                  <small>Giá và khuyến mãi dự kiến áp dụng đến 23:00 | 29/12</small>
                  <div className="content-promo">
                    <ul>Mua kèm iPhone ưu đãi thêm (Tuỳ model và không kèm khuyến mãi khác của sản phẩm mua kèm):
                      <li>- Phụ kiện Apple: Giảm đến 50%. Xem chi tiết</li>
                      <li>- Apple Watch: Giảm đến 30%. Xem chi tiết</li>
                      <li> - iPad: Giảm đến 40%. Xem chi tiết</li>
                      <li>- Macbook: Giảm đến 25%. Xem chi tiết</li>
                    </ul>
                  </div>
                </div>

                <div className="productdetail_container_box-right-content-sell">
                  <button className='productdetail_container_box-right-content-sell-btn'>Mua ngay</button>
                </div>

                <div className="productdetail_container_box-right-content-credit">
                  <button>
                    <p className='title'>Mua trả góp 0%</p>
                    <p className='text'>Qua công ty tài chính</p>
                  </button>
                  <button>
                    <p className='title'>Trả góp 0% qua thẻ</p>
                    <p className='text'>Visa, Mastercard, JCB, Amex</p>
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    }
  </React.Fragment >
  )
}

export default ProductDetails