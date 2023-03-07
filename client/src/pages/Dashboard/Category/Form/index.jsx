import React, { useEffect, useState } from 'react'
import axiosClient from '../../../../api/axiosClient';
import { Navigate } from 'react-router-dom';
import slugify from 'slugify';
import axios from 'axios';

const Form = () => {
    const [category, setCategory] = useState([]);
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [redirect, setRedirect] = useState('');
    const [file, setFile] = useState(null);
    const [slug, setSlug] = useState('');



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
                console.log(response)
                urls.push(response?.data?.secure_url);
            })
        }
        setImage(urls[0]);
        setFile(files[0]);

    };
    const handleAddCategory = async (ev) => {
        ev.preventDefault();


        await axiosClient.post('/category/create', {
            title, image, slug: slugify(title, {
                replacement: '_',
                lower: true,
            })
        }
        ).then(response => {
            // console.log(response)
            const newCategoryList = [...category, response.data];
            setCategory(newCategoryList);
            // setRedirect('/dashboard/category');
        })

    }
    if (redirect) {
        return <Navigate to={redirect} />
    }
    return (
        <div className="dashboard_category-form">
            <form onSubmit={handleAddCategory}>
                <input type="text"
                    placeholder='Tilte Category'
                    name='title'
                    onChange={(ev) => setTitle(ev.target.value)}
                />
                <br />
                {/* <input type="text"
                    placeholder='Tilte Category'
                    name='slug'
                    onChange={(ev) => setSlug(ev.target.value)}
                />
                <br /> */}
                <input type="file"
                    // placeholder='Image...'
                    multiple
                    name='image'
                    onChange={(ev) => uploadPhoto(ev)}
                />
                {/* <PhotosUploader addPhotos={image} onChange={setImage} /> */}
                <div className='dashboard_category-form-btn'>
                    <button className='success'>Thêm danh mục</button><br />
                    <button className='cancel' >Huỷ</button>
                </div>

            </form>
        </div>
    )
}

export default Form