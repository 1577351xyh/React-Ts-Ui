import * as React from 'react'
import * as classnames from 'classnames'
import { FC } from 'react'
import Transition from '../Transition'
import useClickOutside from 'hooks/useClickOutside'
import { MenuItemProps } from './MenuItem'
export interface MenuProps {
  className?: string
  style?: string
}

export const Menu: FC<MenuProps> = (props) => {
  const { className, style, children, ...resProps } = props
  const classes = classnames('Burn-Menu', className, {})
  return <ul className={classes}>{children}</ul>
}
export default Menu
