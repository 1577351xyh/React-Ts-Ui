import * as React from 'react'
import { useState } from 'react'
import Buttons from './examples/Button/index'
import Icon from './examples/Icon/icon'
import Tabs from './examples/Tabs/tab'
import TabPane from './examples/Tabs/tabPane'
import Menu from './examples/Menu/menu'
import MenuItem from './examples/Menu/menuItem'
import SubMenu from './examples/Menu/subMenu'
import Input from './examples/Input'
import { Select, Option } from './examples/Select'
export default function Button() {
  // function callback(key: any) {
  //   console.log(key)
  // }
  function handleChange(value: any) {
    console.log(`selected ${value}`)
  }
  return (
    <div>
      <Select
        defaultValue=""
        style={{ width: 120 }}
        onChange={handleChange}
        placeholder="请选择"
        showSearch
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
    </div>
  )
}
