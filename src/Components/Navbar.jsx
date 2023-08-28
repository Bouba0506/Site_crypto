import React from 'react'
import { Button,Menu,Typography,Avatar } from 'antd'
import { HomeOutlined,MoneyCollectOutlined,BulbOutlined,FunctionOutlined,MenuOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Logo from "../images/cryptocurrency.png"
export const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <div className='flex items-center'>
            <Avatar src={Logo} />
            <Typography.Title level={2} className='logo'>
                <Link to="/">Crypto_App</Link>
            </Typography.Title>
            </div>
            <Menu theme='dark' className='absolute top-20 left-0'>
                <Menu.Item icon={<HomeOutlined/>}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FunctionOutlined/>}>
                    <Link to="/currence">Crypto</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined/>}>
                    <Link to="/echanges">Echanges</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined/>}>
                    <Link to="/details">Details</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined/>}>
                    <Link to="/news">News</Link>
                </Menu.Item>
            </Menu>
        </div>
    </div>
  )
}
