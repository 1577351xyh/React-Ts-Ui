import React, { FC, useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'

export interface MenuItemProps {
  index?: string
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}

export const MenuItem: FC<MenuItemProps> = (props) => {
  const { className, index, style, children, disabled } = props
  const context = useContext(MenuContext)
  const classes = classNames('Burn-menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index,
  })
  console.log(context.index)
  console.log(index)
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

MenuItem.displayName = 'MenuItem'
export default MenuItem
