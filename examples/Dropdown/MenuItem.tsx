import * as React from 'react'
import * as classnames from 'classnames'
import { FC, CSSProperties, createContext, useState, useRef } from 'react'
export interface MenuItemProps {
  className?: string
  style?: string
}
export const MenuItem: FC<MenuItemProps> = (props) => {
  const { className, style, children, ...resProps } = props
  const classes = classnames('Burn-Menu-item', className, {})
  return <li>{children}</li>
}
MenuItem.displayName = 'MenuItem'
export default MenuItem
