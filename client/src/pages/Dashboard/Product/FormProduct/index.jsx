import React from 'react'

const Form = () => {
    return (
        <div>
            <h2>Thêm mới sản phẩm</h2>
            <form>
                <label>Tên sản phẩm</label>
                <input type="text" placeholder=''
                    name='title'
                />
                <label>Mô tả sản phẩm</label>
                <input type="area" placeholder=''
                    name='description'
                />
                <label>Giá niêm yết</label>
                <input type="number" placeholder=''
                    name='price'
                />
                <label>Giá khuyến mại</label>
                <input type="number" placeholder=''
                    name='pricePromo'
                />
                <label>% khuyến mại</label>
                <input type="number" placeholder=''
                    name='discount'
                />
                <label>Danh mục</label>
                <select name="" id="">
                    <option value="">Iphone</option>
                    <option value="">Ipad</option>
                    <option value="">Mac</option>
                </select>
                <label>Photos</label>
                <input type="file" multiple name='photos' />
                <button>Đăng sản phẩm</button>
            </form>
        </div>
    )
}

export default Form