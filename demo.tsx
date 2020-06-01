import * as React from 'react'
import Buttons from './examples/button/index'
import Icon from './examples/icon/index'

export default function Button() {
  return (
    <div>
      <Buttons>按钮</Buttons>
      <Buttons type="primary">按钮</Buttons>
      <Buttons type="dashed">按钮</Buttons>
      <Buttons type="link">按钮</Buttons>
      <Icon name="left"></Icon>
    </div>
  )
}
