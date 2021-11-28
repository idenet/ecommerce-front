import { Col, Row, Typography } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../store/actions/product.action'
import { AppState } from '../../store/reducers'
import { ProductState } from './../../store/reducers/product.reducer'
import Layout from './Layout'
import ProductItem from './ProductItem'
import Search from './Search'

const { Title } = Typography

const Home = () => {
  const dispatch = useDispatch()

  const { createdAt, sold } = useSelector<AppState, ProductState>(
    (state) => state.product
  )

  useEffect(() => {
    dispatch(getProduct('createdAt'))
    dispatch(getProduct('sold'))
  }, [dispatch])

  return (
    <Layout title="拉钩商城" subTitle="尽情享受吧">
      <Search />
      <Title level={5}>最新上架</Title>
      {createdAt.products.map((item) => (
        <Row gutter={[16, 16]} key={item._id}>
          <Col span="6">
            <ProductItem product={item} />
          </Col>
        </Row>
      ))}

      <Title level={5}>最受欢迎</Title>
      {sold.products.map((item) => (
        <Row gutter={[16, 16]} key={item._id}>
          <Col span="6">
            <ProductItem product={item} />
          </Col>
        </Row>
      ))}
    </Layout>
  )
}

export default Home
