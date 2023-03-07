import React from 'react';
import { NavLink, useLocation, useParams, Switch, Route, Outlet } from 'react-router-dom';
import Category from './Category';
import Form from './Category/Form';
import './index.css';
import Product from './Product';

const Dashboard = () => {
    const { pathname } = useLocation();
    return (
        <div className="container_dashboard">
            <div className="container_dashboard-menu">
                <ul>
                    <NavLink className={(navData) => navData.isActive ? 'active' : ''} to={'/dashboard'}>
                        Tổng quan
                    </NavLink>
                    <NavLink className={(navData) => navData.isActive ? 'active' : ''} to={'/dashboard/category'}>
                        Danh mục
                    </NavLink>
                    <NavLink className={(navData) => navData.isActive ? 'active' : ''} to={'/dashboard/product'}>
                        Sản phẩm
                    </NavLink>
                    <NavLink className={(navData) => navData.isActive ? 'active' : ''} to={'/dashboard/cart'}>
                        Giỏ hàng
                    </NavLink>
                    <NavLink className={(navData) => navData.isActive ? 'active' : ''} to={'/dashboard/profile'}>
                        Thông tin người dùng
                    </NavLink>

                </ul>
            </div>
            <div className='container_dashboard-tab'>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard