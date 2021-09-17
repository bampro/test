import React, {useEffect, useState} from 'react';
import {Table, Row, Col, Typography} from 'antd';


const {Title} = Typography;


const User = () => {
  

  useEffect(() => {
   
  });

  const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email'
    },
    {
      title: 'Gender',
      dataIndex: 'gender'
    },
    {
      title: 'Review',
      dataIndex: 'review'
    },
  ];

  const data = [{
    "username":"Phusit Prakit",
    "email":"bampro@hotmail.com",
    "gender":"male",
    "review":"testing"
  }];


  return (
    <div>
        <Row gutter={[40, 0]}>
          <Col span={18}>
            <Title level={2}>
            User
            </Title>
            </Col>
        </Row>
        <Row gutter={[40, 0]}>
        <Col span={24}>
        <Table columns={columns} dataSource={data} />
        </Col>
        </Row>
    </div>
  );
}

export default User;