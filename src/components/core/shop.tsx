import { Button, Col, Empty, Row, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterProduct } from '../../store/actions/product.action'
import { AppState } from './../../store/reducers/index'
import { ProductState } from './../../store/reducers/product.reducer'
import CheckBox from './CheckBox'
import Layout from './Layout'
import ProductItem from './ProductItem'
import RadioBox from './RadioBox'

const Shop = () => {
  const dispatch = useDispatch()
  const [skip, setSkip] = useState(0)

  const product = useSelector<AppState, ProductState>((state) => state.product)

  const [myFilters, setMyFilters] = useState<{
    category: string[]
    price: number[]
  }>({
    category: [],
    price: [],
  })

  useEffect(() => {
    setSkip(0)
  }, [myFilters])

  useEffect(() => {
    dispatch(filterProduct({ filters: myFilters, skip }))
  }, [dispatch, myFilters, skip])

  const filterDOM = () => (
    <Space size="middle" direction="vertical">
      <CheckBox
        handleFilters={(filters: string[]) =>
          setMyFilters({ ...myFilters, category: filters })
        }
      />
      <RadioBox
        handleFilters={(filters: number[]) =>
          setMyFilters({ ...myFilters, price: filters })
        }
      />
    </Space>
  )

  const productDOM = () => (
    <Row gutter={[16, 16]}>
      {product.filter.result.data.map((item) => (
        <Col span="6" key={item._id}>
          <ProductItem product={item} />
        </Col>
      ))}
    </Row>
  )

  const loadMore = () => {
    setSkip(skip + 4)
  }

  const loadMoreButton = () => {
    return (
      <Row>
        {product.filter.result.size >= 4 ? (
          <Button onClick={loadMore}>加载更多 </Button>
        ) : null}
      </Row>
    )
  }

  const noData = () => {
    return <Row>{product.filter.result.size === 0 && <Empty />}</Row>
  }

  return (
    <Layout title="拉钩商城" subTitle="挑选你喜欢的商品吧">
      <Row>
        <Col span="4">{filterDOM()}</Col>
        <Col span="20">
          {productDOM()}
          {loadMoreButton()}
          {noData()}
        </Col>
      </Row>
    </Layout>
  )
}

export default Shop
