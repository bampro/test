import React, {useEffect, useState} from 'react';
import {Table, Row, Col, Button, Typography} from 'antd';
import {useHistory} from 'react-router';
import { Line } from '@ant-design/charts';

const {Title} = Typography;


const Dashboard = () => {
  
  useEffect(() => {
   
  });

  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];

  
  const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };
  return (
    <div>
        <Row gutter={[40, 0]}>
          <Col span={18}>
            <Title level={2}>
            Dashboard
            </Title>
            </Col>
          <Col span={6}>
          
          </Col>
        </Row>
        <Row gutter={[40, 0]}>
        <Col span={24}>
    <Line {...config} />;
        </Col>
        </Row>
    </div>
  );
}

export default Dashboard;