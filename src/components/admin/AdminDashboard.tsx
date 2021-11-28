import {
  OrderedListOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Col, Descriptions, Menu, Row, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { isAuth } from '../../helpers/auth'
import { Jwt } from '../../store/models/auth'
import Layout from './../core/Layout'

const { Title } = Typography

const AdminDashboard = () => {
  const {
    user: { name, email },
  } = isAuth() as Jwt

  // 添加分类 添加产品
  const adminLinks = () => {
    return (
      <>
        <Title level={5}>管理员链接</Title>
        <Menu>
          <Menu.Item key="caterogy">
            <ShoppingCartOutlined />
            <Link to="/create/category">添加分类</Link>
          </Menu.Item>
          <Menu.Item key="product">
            <UserOutlined />
            <Link to="/create/product">添加产品</Link>
          </Menu.Item>
          <Menu.Item key="orderlist">
            <OrderedListOutlined />
            <Link to="/admin/orders">订单列表</Link>
          </Menu.Item>
        </Menu>
      </>
    )
  }

  const adminInfo = () => {
    return (
      <Descriptions title="管理员信息" bordered>
        <Descriptions.Item label="昵称">{name}</Descriptions.Item>
        <Descriptions.Item label="邮件">{email}</Descriptions.Item>
        <Descriptions.Item label="角色">管理员</Descriptions.Item>
      </Descriptions>
    )
  }

  return (
    <Layout title="管理员 Dashboard" subTitle="">
      <Row>
        <Col span="4">{adminLinks()}</Col>
        <Col span="20">{adminInfo()}</Col>
      </Row>
    </Layout>
  )
}

export default AdminDashboard
