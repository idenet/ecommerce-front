import { Menu } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppState } from './../../store/reducers/index'
import { ReduxRouterState } from '@lagunovsky/redux-react-router'

function useActive(currentPath: string, path: string): string {
  return currentPath === path ? 'ant-menu-item-selected' : ''
}

const Navigation = () => {
  const router = useSelector<AppState, ReduxRouterState>(
    (state) => state.router
  )

  const pathname = router.location.pathname

  const isHome = useActive(pathname, '/')
  const isShop = useActive(pathname, '/shop')
  const isSignin = useActive(pathname, '/signin')
  const isSignup = useActive(pathname, '/signup')

  return (
    <Menu mode="horizontal" selectable={false}>
      <Menu.Item className={isHome} key="home">
        <Link to="/">首页</Link>
      </Menu.Item>
      <Menu.Item className={isShop} key="shop">
        <Link to="/shop">商城</Link>
      </Menu.Item>
      <Menu.Item className={isSignin} key="signin">
        <Link to="/signin">登录</Link>
      </Menu.Item>
      <Menu.Item className={isSignup} key="signup">
        <Link to="/signup">注册</Link>
      </Menu.Item>
    </Menu>
  )
}

export default Navigation
