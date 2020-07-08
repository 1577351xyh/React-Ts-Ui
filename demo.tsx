import * as React from 'react'
import { useState, useEffect } from 'react'
import Buttons from './examples/Button/index'
import Icon from './examples/Icon/icon'
import Tabs from './examples/Tabs/tab'
import TabPane from './examples/Tabs/tabPane'
// import Menu from './examples/Menu/menu'
import Menu, { Dropdowm, SubMenu } from './examples/Dropdown/index'
import MenuItem from './examples/Menu/menuItem'
// import SubMenu from './examples/Menu/subMenu'
import Input from './examples/Input'
import Pager from 'examples/pager'

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
      <Menu.Item disabled>
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
  const menu = (
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
      <SubMenu title="sub menu">
        <Menu.Item>3rd menu item</Menu.Item>
        <Menu.Item>4th menu item</Menu.Item>
      </SubMenu>
      <SubMenu title="sub menu">
        <Menu.Item>5d menu item</Menu.Item>
        <Menu.Item>6th menu item</Menu.Item>
      </SubMenu>
    </Menu>
  )
  return (
    <div>
      <Dropdowm overlayArr={menu} trigger="hover">
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          Hover me
        </a>
      </Dropdowm>
      <Pager defaultCurrent={1} total={10}></Pager>
    </div>
  )
}
