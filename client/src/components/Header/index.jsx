import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Form } from 'antd';
import { Input } from 'antd';
import { ShoppingCartOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';


import './index.css';
import { UserContext } from '../../pages/UserContext';



const Header = () => {
    const { Search } = Input;
    const { user } = useContext(UserContext);
    const [isMenu, setIsMenu] = useState(false);
    const handleMenu = () => {
        setIsMenu(!isMenu)
    }

    return (
        <div className='container_header'>
            <MenuOutlined className='icon-menu' onClick={handleMenu} />
            <Link to={'/'}>
                <img src='https://cdn.tgdd.vn/mwgcart/topzone/images/mobile/logo-video.png?v=4' className='container_header--logo' alt="" />
            </Link>
            <ul className={`container_header--menu ${isMenu ? 'hidden' : ''}`}>

                <NavLink className={(navData) => navData.isActive ? 'active' : ''} to={'/iphone'}>
                    <div className='item_menu'>
                        iPhone
                    </div>
                </NavLink>
                <NavLink className={(navData) => navData.isActive ? 'active' : ''} to={'/mac'}>
                    <div className='item_menu'>
                        Mac
                    </div>
                </NavLink>
                <NavLink className={(navData) => navData.isActive ? 'active' : ''} to={'/ipad'}>

                    <div className='item_menu'>
                        iPad
                    </div>
                </NavLink>
                <NavLink className={(navData) => navData.isActive ? 'active' : ''} to={'/watch'}>

                    <div className='item_menu'>
                        Watch
                    </div>
                </NavLink>
                <NavLink className={(navData) => navData.isActive ? 'active' : ''} to={'/am-thanh'}>

                    <div className='item_menu'>
                        Âm thanh
                    </div>
                </NavLink>
                <NavLink className={(navData) => navData.isActive ? 'active' : ''} to={'/phu-kien'}>

                    <div className='item_menu'>
                        Phụ kiện
                    </div>
                </NavLink>
                <NavLink className={(navData) => navData.isActive ? 'active' : ''} to={'/tekzone'}>

                    <div className='item_menu'>
                        TekZone
                    </div>
                </NavLink>
                <NavLink className={(navData) => navData.isActive ? 'active' : ''} to={'/topcare'}>

                    <div className='item_menu'>
                        TopCare
                    </div>
                </NavLink>


                {/* <NavLink className={(navData) => navData.isActive ? 'active' : ''} to={'/login'}>
                    <div className='item_menu'>
                        Login
                    </div>
                </NavLink> */}
            </ul>
            {user && (
                <Link to={'/dashboard'}>
                    <div className='user_profile'>
                        <UserOutlined />
                        {user.firstName} {user.lastName}

                    </div>
                </Link>
            )}
            {/* <Form>
                <Search className='input_search' placeholder="Tìm kiếm sản phẩm" enterButton />
            </Form>
            <ShoppingCartOutlined /> */}

        </div>

    )
}

export default Header