import React from 'react'
import { NavLink } from 'react-router-dom'

const Product = () => {
    return (
        <div>
            <NavLink to={'/dashboard/product/add'}>
                <div>Thêm sản phẩm</div>
            </NavLink>
        </div>
    )
}

export default Product