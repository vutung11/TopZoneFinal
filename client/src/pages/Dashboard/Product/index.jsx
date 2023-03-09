import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import axiosClient from '../../../api/axiosClient';
import { GetAllProduct } from '../../../redux/product';

const Product = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);


    useEffect(() => {
        const fetchData = async () => {
            const data = await dispatch(GetAllProduct(page, limit));
            setProducts(data.payload);
        };

        fetchData();
    }, [page, limit, dispatch, count]);

    const handleNext = () => {
        if (page < products.totalPages)
            setPage(prev => prev + 1);
    }

    const handlePrev = () => {
        setPage(prev => prev - 1);
    }
    const deleteProduct = async (_id) => {
        await axiosClient.delete(`product/${_id}`, { _id });
        const newProducts = products.data.filter((cat) => cat._id !== _id);
        setProducts({ ...products, data: newProducts });
        setCount(count - 1);

    }


    return (
        <div className='dashboard_product'>
            <div className="dashboard_product-add">
                <NavLink to={'/dashboard/product/add'}>
                    <button>Thêm sản phẩm</button>
                </NavLink>
            </div>
            <div className="dashboard_product-list">
                <table>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>Danh mục</th>
                        <th>Giá</th>
                        <th>Giá khuyến mãi</th>
                        <th>% giảm giá</th>
                        <th>Mô tả</th>
                        <th>Hình ảnh</th>
                        <th></th>
                    </tr>
                    {products && products?.data?.map(product => (
                        <tr>
                            <td>{product.title}</td>
                            <td>Iphone</td>
                            <td>{product.price}</td>
                            <td>{product.pricePromo}</td>
                            <td>{product.discount}</td>
                            <td>{product.description}</td>
                            <img src={product?.photos[0]} alt="" />
                            <td>
                                <button onClick={() => deleteProduct(product?._id)}>Xoá</button>
                            </td>
                        </tr>
                    ))}


                </table>
            </div>
            <div className='pagination'>
                <button onClick={handlePrev} disabled={page === 1}>Prev</button>
                <button onClick={handleNext} disabled={page === products?.totalPages}>Next</button>
            </div>

        </div>
    )
}

export default Product