import React, { Component } from 'react';
import { DownloadWrapper } from "./style"
import { Alert, Space, Button } from 'antd';
class Download extends Component {
    render() {
        return (
            <div>
                <DownloadWrapper >
                    <Space size="middle" direction="vertical">
                        <Alert
                            message=""
                            description='To download your Address book, please click " Download the list" button.'
                            type="info"
                            closable
                        />
                        <Button>Download the list</Button>
                    </Space>
                </DownloadWrapper>
            </div >
        );
    }
}

export default Download;