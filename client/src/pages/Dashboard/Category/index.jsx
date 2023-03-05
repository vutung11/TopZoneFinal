import React, { useEffect, useState } from 'react'
import { DeleteTwoTone } from '@ant-design/icons';

import axiosClient from '../../../api/axiosClient';
import slugify from 'slugify';
import './index.css';

const Category = () => {
    const [isForm, setIsForm] = useState(false);
    const [category, setCategory] = useState([]);
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        axiosClient.get('/category/getall').then(response => {
            setCategory(response.data)
        })

    }, []);
    const handleAddCategory = async (ev) => {
        ev.preventDefault();
        const slug = slugify(title, {
            replacement: '-',
            lower: true,
        });
        await axiosClient.post('category/create', { title, image, slug }).then(response => {
            const newCategoryList = [...category, response.data];
            setCategory(newCategoryList);
        })
    }
    const deleteCategory = async (_id) => {
        await axiosClient.delete(`category/${_id}`, { _id }).then(response => {
            const newCategoryList = category.filter((cat) => cat._id !== _id);
            console.log(category, '12', newCategoryList)
            setCategory(newCategoryList);
        })
    }

    return (
        <div className='dashboard_category'>
            <div className='dashboard_category-add'>
                {!isForm ? (
                    <button onClick={() => setIsForm(true)}>Thêm mới</button>
                ) :
                    <button onClick={() => setIsForm(false)}>Huỷ</button>
                }
            </div>

            {isForm && (
                <div className="dashboard_category-form">
                    <form onSubmit={handleAddCategory}>
                        <input type="text"
                            placeholder='Tilte Category'
                            name='title'
                            onChange={(ev) => setTitle(ev.target.value)}
                        />
                        <br />
                        <input type="text"
                            placeholder='Image...'
                            name='image'
                            onChange={(ev) => setImage(ev.target.value)}
                        />
                        <br />
                        <button>Thêm danh mục</button>
                    </form>
                </div>
            )}
            <h2 className='dashboard_category-title'>Danh sách tất cả danh mục</h2>
            <div className='dashboard_category-show'>
                {category && category.map(cate => (
                    <div key={cate._id} className='dashboard_category-show--content'>
                        <img src={cate.image} alt="" />
                        <h3>{cate.title}</h3>
                        <DeleteTwoTone className='delete_icon' onClick={() => deleteCategory(cate._id)} />
                    </div>
                ))
                }

            </div>
        </div>
    )
}

export default Category