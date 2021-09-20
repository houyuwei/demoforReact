import React, { Component } from 'react';
import { HeaderWrapper, Logo } from "./style"

import { Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';


const menu = (
    <Menu>
        <Menu.Item>my Rakuten</Menu.Item>
        <Menu.Item>Rakuten Point club</Menu.Item>
        <Menu.Item>Rakuten Ichiba</Menu.Item>
        <Menu.Item>help</Menu.Item>
        <Menu.Item>Log Out</Menu.Item>
    </Menu>
);


class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        <UserOutlined style={{ fontSize: '24px', color: '#bf0000' }} />
                    </a>
                </Dropdown>
            </HeaderWrapper>
        );
    }
}

export default Header;