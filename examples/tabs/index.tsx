import * as React from 'react'
import './index.scss'
import { createContext, useState, useRef } from 'react'

export const defaultActiveKey = createContext('1')
interface Tabs {
  defaultActiveKey: string | ''
  children: React.ReactNode[]
  onChange(args: string): void
}

export default (props: Tabs) => {
  console.log(props)
  const line: any = useRef()
  let childrenArray =
    props.children &&
    props.children.map((item: any) => {
      return { tab: item.props.tab, key: item.key }
    })

  const [active, setActive] = useState(childrenArray[0].tab)

  childrenArray.forEach((vm: any) => {})
  let element: Array<React.ReactNode> = childrenArray.map((Element: any) => {
    return (
      <span onClick={() => tabClick(Element.tab)} key={Element.key}>
        {Element.tab}
      </span>
    )
  })

  function tabClick(name: any): void {
    setActive(name)
    let arr = childrenArray.map((item) => item.tab)
    let index: number = arr.indexOf(name)
    let title = document.getElementsByTagName('span')
    line.current.style.left = title[index].offsetLeft + 'px'
  }

  return (
    <defaultActiveKey.Provider value={active}>
      <div className="title">
        {element}
        <div className="line" ref={line}></div>
      </div>
      {props.children}
    </defaultActiveKey.Provider>
  )
}
