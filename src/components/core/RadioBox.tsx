import { List, Radio, RadioChangeEvent, Typography } from 'antd'
import React, { FC } from 'react'
import prices from './../../helpers/price'

const { Title } = Typography

interface Props {
  handleFilters: (arg: number[]) => void
}

const RadioBox: FC<Props> = ({ handleFilters }) => {
  const onChange = (event: RadioChangeEvent) => {
    handleFilters(event.target.value)
  }

  return (
    <>
      <Title level={4}>按照价格筛选</Title>
      <Radio.Group>
        <List
          dataSource={prices}
          renderItem={(item) => (
            <List.Item>
              <Radio onChange={onChange} value={item.array}>
                {item.name}
              </Radio>
            </List.Item>
          )}
        />
      </Radio.Group>
    </>
  )
}

export default RadioBox
