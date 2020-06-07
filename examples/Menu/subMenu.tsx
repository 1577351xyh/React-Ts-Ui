import React, { FC, useContext, FunctionComponentElement } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem'

export interface SubMenu {
  index?: string
  title: string
  className?: string
}
const SubMenu: FC<SubMenu> = (props) => {
  const { index, title, className, children } = props
  console.log(index)
  const context = useContext(MenuContext)
  const classes = classNames('Burn-menu-item Burn-submenu-item', {
    'is-active': context.index === index,
  })
  const renderChildren = () => {
    const childrenComponent = React.Children.map(
      children,
      (child: any, index: number) => {
        const childElement = child as FunctionComponentElement<MenuItemProps>
        if (
          childElement.type.displayName === 'MenuItem' ||
          childElement.type.displayName === 'SubMenu'
        ) {
          return React.cloneElement(childElement, {
            index: `${index}-${index}`,
          })
        } else {
          console.error(
            'Warning: SubMenu has a child which is not a MenuItem component'
          )
        }
        return null
      }
    )
    return <ul className="Burn-submenu">{childrenComponent}</ul>
  }
  return (
    <li key={index} className={classes}>
      <div className="Burn-submene-title">{title}</div>
      {renderChildren()}
    </li>
  )
}
SubMenu.displayName = 'SubMenu'
export default SubMenu
