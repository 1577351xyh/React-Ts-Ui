import * as React from 'react'
import { useState, useEffect } from 'react'
import Buttons from './examples/Button/index'
import Icon from './examples/Icon/icon'
import Tabs from './examples/Tabs/tab'
import TabPane from './examples/Tabs/tabPane'
// import Menu from './examples/Menu/menu'
import Menu, { Dropdowm } from './examples/Dropdown/index'
import MenuItem from './examples/Menu/menuItem'
import SubMenu from './examples/Menu/subMenu'
import Input from './examples/Input'

import { Select, Option } from './examples/Select'
export default function Button() {
  function handleChange(value: any) {
    console.log(`selected ${value}`)
  }
  const a = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          1st menu item
        </a>
      </Menu.Item>
    </Menu>
  )
  return (
    <div>
      <Dropdowm overlayArr={a} trigger="hover">
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          Hover me
        </a>
      </Dropdowm>
    </div>
  )
}
