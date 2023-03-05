import React from 'react';
import { NavLink, useLocation, useParams, Switch, Route } from 'react-router-dom';
import Category from './Category';
import './index.css';

const Dashboard = () => {
    const { pathname } = useLocation();
    console.log(pathname);
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
                {pathname === '/dashboard/' && <p>Dashboard</p>}
                {pathname === '/dashboard/category' && (<Category />)}
                {pathname === '/dashboard/product' && <p>product</p>}
                {pathname === '/dashboard/cart' && <p>gio hang</p>}
                {pathname === '/dashboard/profile' && <p>Nguoi dung</p>}
            </div>
        </div>
    )
}

export default Dashboard