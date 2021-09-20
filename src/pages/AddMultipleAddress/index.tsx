import React, { Component } from 'react';
import { Alert, Timeline, Button, Space, Typography, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;
const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info: { file: { status?: string; name?: any; }; fileList?: any; }) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};


class AddMultipleAddress extends Component {
    render() {
        return (
            <div>
                <Space direction="vertical" size='large'>
                    <Alert
                        message=""
                        description="&nbsp;&nbsp;You can add up to 99 addresses(without contact information) by uploading a CSV file.
                Mass registration of overseas addresses, as well as their downloading is not possible at the moment.
                Upload by following the steps below."
                        type="info"
                        closable
                    />
                    <Timeline>
                        <Timeline.Item>
                            <Title level={5} >1.Prepare the data</Title>
                            <Space size='large'>
                                <Button>Check sample file</Button>
                                <Text strong type="danger">Download the sample file from here.</Text>
                            </Space>
                        </Timeline.Item>
                        <Timeline.Item>
                            <Title level={5} >2: Upload the data</Title>
                            <Space size='large'>
                                <Upload {...props}>
                                    <Button style={{ width: 139 }}>Click to Upload</Button>
                                </Upload>
                            </Space>
                        </Timeline.Item>
                        <Timeline.Item>
                            <Title level={5} >3: Download address book</Title>
                            <Space size='large'>
                                <Button>Download the list</Button>
                            </Space>
                        </Timeline.Item>
                    </Timeline>
                </Space>
            </div>
        );
    }
}

export default AddMultipleAddress;