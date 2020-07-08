import * as React from 'react'
import * as classnames from 'classnames'
import { FC, CSSProperties, createContext, useState, useRef } from 'react'
import Transition from '../Transition'

export interface SubMenuProps {
  className?: string
  style?: string
  title: string
}

export const SubMenu: FC<SubMenuProps> = (props) => {
  const { className, style, children, title, ...resProps } = props
  const [openSubMenu, setOpenSubMenu] = useState(false)
  const classes = classnames('Burn-sub-menu', className, {})
  const open = () => {
    setOpenSubMenu(!openSubMenu)
  }
  return (
    <div className={classes}>
      <div onClick={open}>{title}</div>
      <Transition in={openSubMenu} timeout={300} animation="zoom-in-left">
        <div className="Burn-sub-menu-ground">{children}</div>
      </Transition>
    </div>
  )
}

SubMenu.displayName = 'SubMenu'
export default SubMenu
