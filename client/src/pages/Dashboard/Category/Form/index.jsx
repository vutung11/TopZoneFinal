import React, { useEffect, useState } from 'react'
import axiosClient from '../../../../api/axiosClient';
import { Navigate, NavLink, useParams } from 'react-router-dom';
import slugify from 'slugify';
import axios from 'axios';

const Form = () => {

    const { id } = useParams();
    const [category, setCategory] = useState([]);
    const [data, setData] = useState([]);
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [redirect, setRedirect] = useState('');
    const [file, setFile] = useState(null);
    const [slug, setSlug] = useState('');



    useEffect(() => {
        if (id) {
            axiosClient.get(`/category/${id}`).then(response => {
                setTitle(response.data.title)
                setImage(response.data.image)
                setSlug(response.data.slug)
            })
        }

    }, [id]);

    useEffect(() => {
        axiosClient.get('/category/getall').then(response => {
            setCategory(response.data)
        })

    }, []);

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
        setImage(urls[0]);
        setFile(files[0]);

    };
    const handleAddCategory = async (ev) => {
        ev.preventDefault();

        if (id) {
            await axiosClient.put(`/category/${id}`, {

                _id: id, title, image, slug: slugify(title, {
                    replacement: '-',
                    lower: true,
                })
            }).then(response => {
                // setRedirect('/dashboard/category');
            })
        } else {
            await axiosClient.post('/category/create', {
                title, image, slug: slugify(title, {
                    replacement: '-',
                    lower: true,
                })
            }).then(response => {
                const newCategoryList = [...category, response.data];
                setCategory(newCategoryList);
                // setRedirect('/dashboard/category');
            })
        }
    }
    if (redirect) {
        return <Navigate to={redirect} />
    }
    return (
        <div className="dashboard_category-form">
            <h2>Danh mục</h2>
            <form onSubmit={handleAddCategory}>
                <input type="text"
                    placeholder='Tilte Category'
                    name='title'
                    value={title}
                    onChange={(ev) => setTitle(ev.target.value)}
                />
                <br />
                <input type="file"
                    multiple
                    name='image'
                    onChange={(ev) => uploadPhoto(ev)}
                />
                {image && (
                    <img className='pre_image' src={image} alt="" />
                )}
                <div className='dashboard_category-form-btn'>
                    <button className='success'>{id ? 'Cập nhât' : 'Thêm danh mục'}</button><br />
                    <button className='cancel' >Huỷ</button>
                </div>

            </form>
        </div>
    )
}
export default Form