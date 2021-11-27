import { PageHeader } from 'antd'
import React, { FC } from 'react'
import Navigations from './Navigations'

interface Props {
  children: React.ReactNode
  title: string
  subTitle: string
}

const Layout: FC<Props> = ({ children, title, subTitle }) => {
  return (
    <div>
      <Navigations />
      <PageHeader title={title} subTitle={subTitle} className="jumbotron" />
      <div style={{ width: '85%', margin: '0 auto' }}>{children}</div>
    </div>
  )
}

export default Layout
