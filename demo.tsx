import * as React from 'react'
import Buttons from './examples/button/index'
import Icon from './examples/icon/index'
import Tabs from './examples/tabs/index'
import TabPane from './examples/tabs/tabPane/index'

export default function Button() {
  function callback(key: any) {
    console.log(key)
  }
  return (
    <div>
      <Buttons>按钮</Buttons>
      <Buttons type="primary" icon="search">
        按钮
      </Buttons>
      <Buttons type="primary" icon="download"></Buttons>
      <Buttons type="primary" icon="download" href="baidu.com">
        下载
      </Buttons>
      <Buttons type="dashed">按钮</Buttons>
      <Buttons type="link">按钮</Buttons>
      <Icon name="left"></Icon>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  )
}
