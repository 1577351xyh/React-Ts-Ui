import * as React from 'react'
import './index.scss'
// import TabPane from './tabPane/index'
interface Tabs {
  defaultActiveKey: string | ''
  children: React.ReactNode[]
  onChange(args: string): void
}
export default (props: Tabs) => {
  let childrenArray =
    props.children &&
    props.children.map((item: any) => {
      return { tab: item.props.tab, key: item.key }
    })

  childrenArray.forEach((vm: any) => {})
  let element: Array<React.ReactNode> = childrenArray.map((Element: any) => {
    return <span key={Element.key}>{Element.tab}</span>
  })

  return (
    <div>
      <div>{element}</div>
      {props.children}
    </div>
  )
}
