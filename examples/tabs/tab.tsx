import * as React from 'react'
import { createContext, useState, useRef } from 'react'
import * as classnames from 'classnames'
import Icon from '../Icon/icon'

export const defaultActiveKey = createContext('')
interface Tabs {
  defaultActiveKey: string | ''
  children: React.ReactNode[]
  onChange(args: string): void
  tabPosition?: string
}

export default (props: Tabs) => {
  const { tabPosition, children, onChange } = props
  const className: string = classnames({
    vertical: tabPosition,
    'xyh-tabs': true,
  })
  const line: any = useRef()
  const list: any = useRef()
  let childrenArray =
    children &&
    children.map((item: any) => {
      return {
        tab: item.props.tab,
        key: item.key,
        disabled: item.props.disabled,
        icon: item.props.icon,
      }
    })

  const [active, setActive] = useState(childrenArray[0].tab)

  let element: Array<React.ReactNode> = childrenArray.map((Element: any) => {
    let icons = Element.icon ? <Icon name={Element.icon}></Icon> : null
    return (
      <span
        onClick={() => tabClick(Element)}
        className={Element.disabled ? 'disabled' : ''}
        key={Element.key}
      >
        {icons}
        {Element.tab}
      </span>
    )
  })

  function tabClick(item: any): void {
    const name: string = item.tab
    if (item.disabled) return
    setActive(name)
    onChange(item.key)
    let arr: Array<string> = childrenArray.map((item) => item.tab)
    let index: number = arr.indexOf(name)
    let title = list.current.getElementsByTagName('span')
    tabPosition
      ? (line.current.style.top = title[index].offsetTop - 5 + 'px')
      : (line.current.style.left = title[index].offsetLeft + 'px')
  }

  return (
    <div className={className}>
      <defaultActiveKey.Provider value={active}>
        <div className="title" ref={list}>
          {element}
          <div className="line" ref={line}></div>
        </div>
        {props.children}
      </defaultActiveKey.Provider>
    </div>
  )
}
