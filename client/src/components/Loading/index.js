import React from 'react';
import { Row, Col, Spin } from 'antd';


const Loading = () => {


    return <Row justify='center'>
        <Col style={{ padding: 12 }}>
            <Spin size='small' />
        </Col>
    </Row>
}

export default Loading
