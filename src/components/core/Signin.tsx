import { Button, Form, Input, Result } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { signin, SigninPayload } from '../../store/actions/auth.action'
import { Jwt } from '../../store/models/auth'
import { AppState } from '../../store/reducers'
import { AuthState } from '../../store/reducers/auth.reducer'
import { isAuth } from './../../helpers/auth'
import Layout from './Layout'

function Signin() {
  // hooks
  const dispatch = useDispatch()

  const onFinish = (value: SigninPayload) => {
    dispatch(signin(value))
  }

  // 获取登录结构
  const auth = useSelector<AppState, AuthState>((state) => state.auth)
  // 登录失败 显示错误信息
  const ShowError = () => {
    if (auth.signin.loaded && !auth.signin.success) {
      return (
        <Result
          status="warning"
          title="注册失败"
          subTitle={auth.signin.message}
        />
      )
    }
  }
  // 登录成功 根据角色天跳转管理页面
  const redirectToDashboard = () => {
    const auth = isAuth()
    if (auth) {
      const {
        user: { role },
      } = auth as Jwt

      if (role === 0) {
        // 注册用户
        return <Navigate to="/user/dashboard" replace={true} />
      } else {
        // 管理员
        return <Navigate to="/admin/dashboard" replace={true} />
      }
    }
  }

  const signinForm = () => {
    return (
      <Form onFinish={onFinish}>
        <Form.Item name="password" label="密码">
          <Input.Password />
        </Form.Item>
        <Form.Item name="email" label="邮箱">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    )
  }
  // 处理导航链接

  return (
    <Layout title="登录" subTitle="嘿， 小伙伴，立即登录到拉钩电商系统吧！">
      {ShowError()}
      {redirectToDashboard()}
      {signinForm()}
    </Layout>
  )
}

export default Signin
