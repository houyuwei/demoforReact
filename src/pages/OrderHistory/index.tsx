import React, { Component } from 'react';
import { Tabs, Table, Alert, Select, Space } from 'antd';

const { Option } = Select;
const { TabPane } = Tabs;

function callback(key: string) {
    console.log(key);
}
const dataSource = [
    {
        key: '1',
        name: 'Rakuten Hanako',
        relationship: 'Co-worker',
        date: 'November 18, 1978',
        service: 'service',
        shop: 'shop',
        item: 'item',
        Price: 2000
    },
    {
        key: '2',
        name: 'Rakuten Taro',
        relationship: 'Friend (Male)',
        date: 'July',
        service: 'service',
        shop: 'shop',
        item: 'item',
        price: 2000
    },
    {
        key: '3',
        name: 'Rakuten Taro',
        relationship: 'Friend (Male)',
        date: 'July',
        service: 'service',
        shop: 'shop',
        item: 'item',
        price: 2000
    },
    {
        key: '4',
        name: 'Rakuten Taro',
        relationship: 'Friend (Male)',
        date: 'July',
        service: 'service',
        shop: 'shop',
        item: 'item',
        price: 2000
    },
    {
        key: '5',
        name: 'Rakuten Taro',
        relationship: 'Friend (Male)',
        date: 'July',
        service: 'service',
        shop: 'shop',
        item: 'item',
        price: 2000
    },
    {
        key: '6',
        name: 'Rakuten Taro',
        relationship: 'Friend (Male)',
        date: 'July',
        service: 'service',
        shop: 'shop',
        item: 'item',
        price: 2000
    },
    {
        key: '7',
        name: 'Rakuten Taro',
        relationship: 'Friend (Male)',
        date: 'July',
        service: 'service',
        shop: 'shop',
        item: 'item',
        price: 2000
    },
    {
        key: '8',
        name: 'Rakuten Taro',
        relationship: 'Friend (Male)',
        date: 'July',
        service: 'service',
        shop: 'shop',
        item: 'item',
        price: 2000
    },
    {
        key: '9',
        name: 'Rakuten Taro',
        relationship: 'Friend (Male)',
        date: 'July',
        service: 'service',
        shop: 'shop',
        item: 'item',
        price: 20000
    },
];

const columns = [
    {
        title: 'name',
        dataIndex: 'name',
        key: 'name',
        editable: true,
    },
    {
        title: 'relationship',
        dataIndex: 'relationship',
        key: 'relationship',
        editable: true,
    },
    {
        title: 'date',
        dataIndex: 'date',
        key: 'date',
        editable: true,
    },
    {
        title: 'service',
        dataIndex: 'service',
        key: 'service',
        editable: true,
    },
    {
        title: 'shop',
        dataIndex: 'shop',
        key: 'shop',
        editable: true,
    },
    {
        title: 'item',
        dataIndex: 'item',
        key: 'item',
        editable: true,
    },
    {
        title: 'price',
        dataIndex: 'price',
        key: 'price',
        editable: true,
    }
];


const totals = dataSource.length;

const OrderTabs = () => (
    <Tabs defaultActiveKey="1" onChange={callback} centered>
        <TabPane tab="All   " key="1">
            <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 5 }} />;
        </TabPane>
        <TabPane tab="Myself" key="2">
            <Table dataSource={dataSource} columns={columns} />;
        </TabPane>
        <TabPane tab="Family" key="3">
            <Table dataSource={dataSource} columns={columns} />;
        </TabPane>
        <TabPane tab="Personal" key="4">
            <Table dataSource={dataSource} columns={columns} />;
        </TabPane>
        <TabPane tab="business" key="5">
            <Table dataSource={dataSource} columns={columns} />;
        </TabPane>
    </Tabs>
);
class OrderHistory extends Component {

    render() {
        return (
            <div>
                <Space direction="vertical" size="large">
                    <Alert
                        message=""
                        description='&nbsp;&nbsp;To add or change " Memo", click "Change" button on the right side of each information below.
                *Order history for usage of Rakuten Ichiba Mobile, Group purchase, Regular purchase and Rakuten Safe Auction Service are not shown on this page.'
                        type="info"
                        closable
                    />
                    <Space size="small">
                        <text>Narrow the list by the date of use</text>
                        <Select defaultValue="Recent90days" style={{ width: 120 }}>
                            <Option value="Recent90days">Recent 90 days</Option>
                            <Option value="thisyear">this year</Option>
                            <Option value="lastyear" >last year</Option>
                            <Option value="2yearsago">2 years ago</Option>
                        </Select>
                        <text>Purpose:</text>
                        <Select defaultValue="0" style={{ width: 180 }}>
                            <Option value="0" >All</Option>
                            <Option value="11010">Birthday gift</Option>
                            <Option value="11020">Wedding gift</Option>
                            <Option value="11030">Baby gift</Option>
                            <Option value="11040">Reciprocal gift</Option>
                            <Option value="11050">Move &amp; Housewarming gift</Option>
                            <Option value="11060">Retirement &amp; Career advancement gift</Option>
                            <Option value="11070">Enrollment &amp; graduation gift</Option>
                            <Option value="11080">New career gift</Option>
                            <Option value="11090">Illness recovery gift</Option>
                            <Option value="13010">Gift for illness</Option>
                            <Option value="13020">Gift for Return</Option>
                            <Option value="13030">Gift for funeral</Option>
                            <Option value="15010">Memorial/Anniversary gift</Option>
                            <Option value="20101">New year's gift</Option>
                            <Option value="20115">Coming-of-Age Day gift</Option>
                            <Option value="20214">Valentine's Day gift</Option>
                            <Option value="20303">Hina matsuri (March 3) gift</Option>
                            <Option value="20314">White day gift</Option>
                            <Option value="20505">Children's Day gift</Option>
                            <Option value="20509">Mother's Day gift</Option>
                            <Option value="20620">Father's Day gift</Option>
                            <Option value="20815">Summer gift</Option>
                            <Option value="20921">Respect-for-Senior-Citizens Day gift</Option>
                            <Option value="21215">Year-end gift</Option>
                            <Option value="21225">Christmas gift</Option>
                            <Option value="31010">Gift for yourself</Option>
                        </Select>
                    </Space>
                    <OrderTabs />
                </Space>
            </div>
        );
    }
}

export default OrderHistory;



