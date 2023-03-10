import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axiosClient from '../../../../api/axiosClient';
import slugify from 'slugify';

import './index.css';

const Form = () => {

    const { id } = useParams();
    const { categories } = useSelector(state => state.category);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState();
    const [pricePromo, setPricePromo] = useState();
    const [discount, setDiscount] = useState();
    const [category, setCategory] = useState();
    const [photos, setPhotos] = useState([]);
    const [slug, setSlug] = useState('');



    useEffect(() => {
        if (id)
            axiosClient.get(`product/getone/${id}`).then(response => {
                const data = response.data
                setTitle(data.title);
                setDescription(data.description);
                setPrice(data.price);
                setPricePromo(data.pricePromo);
                setDiscount(data.discount);
                setCategory(data.category);
                setPhotos(data.photos);

            })
    }, [id])

    const uploadPhoto = async (ev) => {
        const files = ev.target.files;
        console.log(files)
        const CLOUD_NAME = 'dsytimdla';
        const PRESET_NAME = 'demo-upload';
        const FOLDER_NAME = 'TopZone';

        const urls = [];
        const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

        const formData = new FormData();
        formData.append('upload_preset', PRESET_NAME);
        formData.append('folder', FOLDER_NAME);

        for (const file of files) {
            formData.append('file', file);
            await axios.post(api, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            }).then(response => {
                urls.push(response?.data?.secure_url);
            })
        }
        setPhotos(urls);

    };

    const handleSubmitProduct = (ev) => {
        ev.preventDefault();
        if (id) {
            axiosClient.put(`product/update/${id}`, {
                _id: id, title, slug: slugify(title, {
                    replacement: '-',
                    lower: true,
                }), description, photos, price, pricePromo, discount, category

            });

        } else if (id === undefined) {
            axiosClient.post('/product/addproduct',
                {
                    title, slug: slugify(title, {
                        replacement: '-',
                        lower: true,
                    }), description, price, pricePromo, discount, category, photos
                })
                .then(response => {
                    // const newCategoryList = [...category, response.data];
                    // setCategory(newCategoryList);
                    // setRedirect('/dashboard/category');
                })
        }
    }

    return (
        <div className='form_product'>
            <h2>Thêm mới sản phẩm</h2>
            <form className='form_product-item' onSubmit={handleSubmitProduct}>
                <label>Tên sản phẩm</label>
                <input type="text" placeholder=''
                    name='title'
                    value={title}
                    onChange={(ev) => setTitle(ev.target.value)}
                />
                <label>Mô tả sản phẩm</label>
                <input type="area" placeholder=''
                    name='description'
                    value={description}
                    onChange={(ev) => setDescription(ev.target.value)}
                />
                <label>Giá niêm yết</label>
                <input type="number" placeholder=''
                    name='price'
                    value={price}
                    onChange={(ev) => setPrice(ev.target.value)}
                />
                <label>Giá khuyến mại</label>
                <input type="number" placeholder=''
                    name='pricePromo'
                    value={pricePromo}
                    onChange={(ev) => setPricePromo(ev.target.value)}
                />
                <label>% khuyến mại</label>
                <input type="number" placeholder=''
                    name='discount'
                    value={discount}
                    onChange={(ev) => setDiscount(ev.target.value)}
                />
                <label>Danh mục</label>
                <select name="category" onChange={(ev) => setCategory(ev.target.value)}>
                    {categories && categories.map(item => (
                        <option
                            key={item._id}
                            value={item._id}
                        // selected={item._id === category}
                        >
                            {item.title}
                        </option>
                    ))}
                </select>
                <label>Photos</label>
                <input onChange={(ev) => uploadPhoto(ev)} type="file" multiple name='photos' />
                <div className='pre_photos'>
                    {photos && (

                        photos.map((photo, index) => (
                            <img key={index} src={photo} alt="" />
                        ))
                    )}
                </div>
                <button>Đăng sản phẩm</button>
            </form>
        </div>
    )
}

export default Form