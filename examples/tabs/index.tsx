import * as React from 'react'
import './index.scss'
import { createContext, useState, useRef } from 'react'
// import * as classnames from 'classnames'

export const defaultActiveKey = createContext('')
interface Tabs {
  defaultActiveKey: string | ''
  children: React.ReactNode[]
  onChange(args: string): void
}

export default (props: Tabs) => {
  // const className: string = classnames({
  //   button: true,
  // })
  const line: any = useRef()
  let childrenArray =
    props.children &&
    props.children.map((item: any) => {
      return {
        tab: item.props.tab,
        key: item.key,
        disabled: item.props.disabled,
      }
    })

  const [active, setActive] = useState(childrenArray[0].tab)

  console.log(childrenArray)
  let element: Array<React.ReactNode> = childrenArray.map((Element: any) => {
    return (
      <span
        onClick={() => tabClick(Element)}
        className={Element.disabled ? 'disabled' : ''}
        key={Element.key}
      >
        {Element.tab}
      </span>
    )
  })

  function tabClick(item: any): void {
    const name: string = item.tab
    if (item.disabled) return
    setActive(name)
    let arr: Array<string> = childrenArray.map((item) => item.tab)
    let index: number = arr.indexOf(name)
    let title = document.getElementsByTagName('span')
    line.current.style.left = title[index].offsetLeft + 'px'
  }

  return (
    <div className="xyh-tabs">
      <defaultActiveKey.Provider value={active}>
        <div className="title">
          {element}
          <div className="line" ref={line}></div>
        </div>
        {props.children}
      </defaultActiveKey.Provider>
    </div>
  )
}
