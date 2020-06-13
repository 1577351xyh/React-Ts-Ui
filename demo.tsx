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

export default function Button() {
  // function callback(key: any) {
  //   console.log(key)
  // }
  function x() {
    console.log(a)
  }
  const [a, seta] = useState('1')
  return (
    <div>
      <button onClick={x}></button>
      <Input
        style={{ width: '300px' }}
        placeholder="input with icon"
        icon="search"
        defaultValue={a}
        onChange={(e) => {
          seta(e.target.value)
        }}
      />
      <Input
        style={{ width: '300px' }}
        defaultValue="prepend text"
        prepend="https://"
      />
      <Input style={{ width: '300px' }} defaultValue="google" append=".com" />
      {/* <Menu
        defaultIndex="0"
        onSelect={(index) => {
          console.log(index)
        }}
      >
        <MenuItem>cool link</MenuItem>
        <MenuItem disabled>disabled</MenuItem>
        <MenuItem>cool link 2</MenuItem>
        <SubMenu title="xxxxxx">
          <MenuItem>cool link</MenuItem>
          <MenuItem>disabled</MenuItem>
          <MenuItem>cool link 2</MenuItem>
        </SubMenu>
      </Menu>
      <Menu
        defaultIndex="0"
        onSelect={(index) => {
          console.log(index)
        }}
        mode="vertical"
        defaultOpenSubMenus={['3']}
      >
        <MenuItem>cool link</MenuItem>
        <MenuItem disabled>disabled</MenuItem>
        <MenuItem>cool link 2</MenuItem>
        <SubMenu title="xxxxxx">
          <MenuItem>cool link</MenuItem>
          <MenuItem>disabled</MenuItem>
          <MenuItem>cool link 2</MenuItem>
        </SubMenu>
      </Menu>
      <Buttons>按钮</Buttons>
      <Buttons disabled>按钮</Buttons>
      <Buttons types="primary" icon="search">
        按钮
      </Buttons>
      <Buttons types="danger" icon="search">
        按钮
      </Buttons>
      <Buttons types="primary" icon="download"></Buttons>
      <Buttons types="primary" icon="download" href="baidu.com">
        下载
      </Buttons>
      <Buttons types="dashed">按钮</Buttons>
      <Buttons types="link">按钮</Buttons>
      <Icon name="left"></Icon>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Tab 1" key="9">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" disabled key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Tab 4" key="4">
          Content of Tab Pane 4
        </TabPane>
      </Tabs>
      <Tabs defaultActiveKey="1" onChange={callback} tabPosition="left"> */}
      {/* <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" disabled key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Tab 4" key="4">
          Content of Tab Pane 4
        </TabPane>
      </Tabs> */}
    </div>
  )
}
