import React, {
  FC,
  useState,
  createContext,
  useContext,
  CSSProperties,
} from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'

type MenuMode = 'horizontal' | 'vertical'
export interface MenuItemProps {
  index?: string
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}

export const Menu: FC<MenuItemProps> = (props) => {
  const { className, index, style, children, disabled } = props
  const context = useContext(MenuContext)
  const classes = classNames('menu', className, {
    'is-disable': disabled,
    'is-active': context.index === index,
  })
  const handleClick = () => {
    if (context.onSelect && typeof index === 'string' && !disabled) {
      context.onSelect(index)
    }
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}

export default Menu
