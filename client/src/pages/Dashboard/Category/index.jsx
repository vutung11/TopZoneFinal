import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { DeleteTwoTone, EditOutlined } from '@ant-design/icons';
import axiosClient from '../../../api/axiosClient';

import './index.css';

const Category = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        axiosClient.get('/category/getall').then(response => {
            setCategory(response.data)
        })

    }, []);

    const deleteCategory = async (_id) => {
        await axiosClient.delete(`category/${_id}`, { _id }).then(response => {
            const newCategoryList = category.filter((cat) => cat._id !== _id);
            setCategory(newCategoryList);
        })
    }

    return (
        <div className='dashboard_category'>
            <div className='dashboard_category-add'>
                <NavLink to={'/dashboard/category/add'}>
                    <button>Thêm mới</button>
                </NavLink>
            </div>

            <h2 className='dashboard_category-title'>Danh sách tất cả danh mục</h2>
            <div className='dashboard_category-show'>
                {category && category.map(cate => (
                    <div key={cate._id} className='dashboard_category-show--content'>
                        <img src={cate.image} alt="" />
                        <h3>{cate.title}</h3>
                        <NavLink to={`/dashboard/category/${cate._id}`}>
                            <EditOutlined />
                        </NavLink>
                        <DeleteTwoTone className='delete_icon' onClick={() => deleteCategory(cate._id)} />
                    </div>
                ))
                }

            </div>
        </div>
    )
}

export default Category