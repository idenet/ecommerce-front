import { Button, Form, Input, message } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { isAuth } from '../../helpers/auth'
import { Jwt } from '../../store/models/auth'
import { API } from './../../config'
import Layout from './../core/Layout'

const AddCategory = () => {
  const [name, setName] = useState<String>('')
  let navigate = useNavigate()

  const { user, token } = isAuth() as Jwt
  useEffect(() => {
    async function addCategory() {
      try {
        let response = await axios.post<{ name: string }>(
          `${API}/category/create/${user._id}`,
          {
            name: name,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        message.success(`[${response.data.name}] 添加成功`)
      } catch (error: any) {
        message.error(error.response.data.error)
      }
    }

    if (name) {
      addCategory()
    }
  }, [name, token, user._id])

  const onFinish = (value: { name: string }) => {
    setName(value.name)
  }

  return (
    <Layout title="添加分类" subTitle="">
      <Form onFinish={onFinish}>
        <Form.Item name="name" label="分类名称">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            添加分类
          </Button>
        </Form.Item>
      </Form>
      <Button onClick={() => navigate(-1)}>返回 dashboard</Button>
    </Layout>
  )
}

export default AddCategory
