import * as React from 'react'
import { defaultActiveKey } from './tab'
import { useContext } from 'react'

export interface TabPane {
  children?: string | ''
  tab: string
  key: any
  disabled?: boolean
  icon?: string
}
export default (props: TabPane) => {
  const active = useContext(defaultActiveKey)
  return active === props.tab ? (
    <div className="tab-pane">
      <div>{props.children}</div>
    </div>
  ) : null
}
