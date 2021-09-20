import React, { Component } from 'react';
import { FooterWrapper } from "./style"

import { Typography, Select, } from 'antd';
const { Option } = Select;
const { Text } = Typography;
class Footer extends Component {
    render() {
        return (
            <FooterWrapper >
                <Select defaultValue="english" style={{ width: "120px" }}>
                    <Option value="english">English</Option>
                    <Option value="japanese">日本語</Option>
                </Select>
                <Text>© Rakuten Group, Inc.</Text>
            </FooterWrapper>
        );
    }
}

export default Footer;