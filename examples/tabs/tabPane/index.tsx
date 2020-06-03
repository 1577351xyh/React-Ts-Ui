import * as React from 'react'
import '../index.scss'
import { defaultActiveKey } from '../index'
import { useContext } from 'react'

interface TabPane {
  children?: string | ''
  tab: string
  key: any
}
export default (props: TabPane) => {
  const active = useContext(defaultActiveKey)
  
  console.log(active)
  return active === props.tab ? (
    <div>
      <div>{props.children}</div>
    </div>
  ) : null
}
