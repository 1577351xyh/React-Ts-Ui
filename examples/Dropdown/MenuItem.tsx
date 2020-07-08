import * as React from 'react'
import * as classnames from 'classnames'
import { FC, CSSProperties, createContext, useState, useRef } from 'react'
export interface MenuItemProps {
  className?: string
  style?: string
  disabled?: boolean
}
export const MenuItem: FC<MenuItemProps> = (props) => {
  const { className, style, children, disabled, ...resProps } = props
  const classes = classnames('Burn-Menu-item', className, {
    disabled,
  })
  return <li className={classes}>{children}</li>
}
MenuItem.displayName = 'MenuItem'
export default MenuItem
