import { Button, Card, Col, Image, Row, Typography } from 'antd'
import moment from 'moment'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Product } from '../../store/models/product'
import { API } from './../../config'

const { Title, Paragraph } = Typography

interface Props {
  product: Product
  showVieweProduct?: boolean
  showCartButton?: boolean
}

const ProductItem: FC<Props> = ({
  product,
  showVieweProduct = true,
  showCartButton = true,
}) => {
  const showButtons = () => {
    let buttonArray = []
    if (showVieweProduct) {
      buttonArray.push(
        <Button type="link">
          <Link to={`/product/${product._id}`}>查看详情</Link>
        </Button>
      )
    }
    if (showCartButton) {
      buttonArray.push(
        <Button type="link">
          <Link to="">加入购物车</Link>
        </Button>
      )
    }
    return buttonArray
  }

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <Image
          width={240}
          src={`${API}/product/photo/${product._id}`}
          alt={product.name}
        />
      }
      actions={showButtons()}
    >
      <Title level={5}>{product.name}</Title>
      <Paragraph ellipsis={{ rows: 2 }}>{product.description}</Paragraph>
      <Row>
        <Col span="12">销量: {product.sold}</Col>
        <Col span="12" style={{ textAlign: 'right' }}>
          价格: {product.price}
        </Col>
      </Row>
      <Row>
        <Col span="12">
          上架时间: {moment(product.createdAt).format('YYYY-MM-DD')}
        </Col>
        <Col span="12" style={{ textAlign: 'right' }}>
          所属分类: {product.category.name}
        </Col>
      </Row>
    </Card>
  )
}

export default ProductItem
