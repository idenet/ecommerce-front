import { Checkbox as AntedCheckbox, Typography } from 'antd'
import { CheckboxValueType } from 'antd/lib/checkbox/Group'
import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CategoryState } from '../../store/reducers/category.reducer'
import { getCategory } from './../../store/actions/category.action'
import { AppState } from './../../store/reducers/index'

const { Title } = Typography

interface Props {
  handleFilters: (arg: string[]) => void
}

const CheckBox: FC<Props> = ({ handleFilters }) => {
  const dispatch = useDispatch()

  const categorys = useSelector<AppState, CategoryState>(
    (state) => state.category
  )

  useEffect(() => {
    dispatch(getCategory())
  }, [dispatch])

  const onChange = (checkedValue: CheckboxValueType[]) => {
    handleFilters(checkedValue as string[])
  }

  return (
    <div>
      <Title level={4}>按照分类筛选</Title>
      <AntedCheckbox.Group
        className="checkBoxFilter"
        options={categorys.category.result.map((item) => ({
          label: item.name,
          value: item._id,
        }))}
        onChange={onChange}
      />
    </div>
  )
}

export default CheckBox
