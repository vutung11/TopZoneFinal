import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import axiosClient from '../../../api/axiosClient';
import { GetAllCategory } from '../../../redux/categories';
import { GetAllProduct } from '../../../redux/product';

const Product = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [deleteProductId, setDeleteProductId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const { categories } = useSelector((state) => state.category);

    useEffect(() => {
        dispatch(GetAllCategory())
    }, [])

    const getCategoryTitle = (categoryId) => {
        const category = categories.find((cat) => cat._id === categoryId);
        return category ? category.title : '';
    };



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
    const handleDeleteClick = (_id) => {
        setDeleteProductId(_id);
        setShowModal(true);
    };
    const deleteProduct = async () => {
        if (deleteProductId) {
            await axiosClient.delete(`product/${deleteProductId}`, { _id: deleteProductId });
            const newProducts = products.data.filter((cat) => cat._id !== deleteProductId);
            setProducts({ ...products, data: newProducts });
            setCount(count - 1);
        }
        setShowModal(false);
    }


    return (
        <div className='dashboard_product'>
            <div className="dashboard_product-add">
                <NavLink to={'/dashboard/product/add'}>
                    <button>Th??m s???n ph???m</button>
                </NavLink>
            </div>
            <div className="dashboard_product-list">
                <table>
                    <tr>
                        <th>T??n s???n ph???m</th>
                        <th>Danh m???c</th>
                        <th>Gi??</th>
                        <th>Gi?? khuy???n m??i</th>
                        <th>% gi???m gi??</th>
                        <th>M?? t???</th>
                        <th>H??nh ???nh</th>
                        <th></th>
                    </tr>
                    {products && products?.data?.map(product => (
                        <tr>
                            <td>{product.title}</td>
                            <td>{getCategoryTitle(product.category)}</td>
                            <td>{product.price}</td>
                            <td>{product.pricePromo}</td>
                            <td>{product.discount}</td>
                            <td>{product.description}</td>
                            <img src={product?.photos[0]} alt="" />
                            <td>
                                <NavLink to={`/dashboard/product/${product._id}`}>
                                    <button>Ch???nh s???a</button>
                                </NavLink>
                                <button onClick={() => handleDeleteClick(product._id)}>Xo??</button>
                            </td>
                            {showModal && (
                                <div className="modal-container">
                                    <div className="modal">
                                        <h2>X??c nh???n xo?? s???n ph???m</h2>
                                        <p>B???n c?? ch???c ch???n mu???n xo?? s???n ph???m {product.title} ? </p>
                                        <div className="modal-buttons">
                                            <button onClick={() => setShowModal(false)}>Hu???</button>
                                            <button onClick={deleteProduct}>Xo??</button>
                                        </div>
                                    </div>
                                </div>
                            )}
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