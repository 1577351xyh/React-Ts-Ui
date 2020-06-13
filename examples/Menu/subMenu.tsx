import React, {
  FC,
  useContext,
  useState,
  FunctionComponentElement,
} from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem'
import Icon from '../Icon/icon'
import Transition from '../Transition'

export interface SubMenu {
  index?: string
  title: string
  className?: string
}
const SubMenu: FC<SubMenu> = (props) => {
  const { index, title, className, children } = props
  const context = useContext(MenuContext)
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>
  const isOpend =
    index && context.mode === 'vertical'
      ? openedSubMenus.indexOf(index) > -1
      : false

  // 展开
  const [menuOpen, setmenuOpen] = useState(isOpend)
  const classes = classNames('Burn-menu-item Burn-submenu-item', {
    'is-active': context.index === index,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical',
  })
  const submenuClasses = classNames('Burn-submenu', {
    'menu-opened': menuOpen,
  })

  const handClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setmenuOpen(!menuOpen)
  }
  let timer: any
  const handMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setmenuOpen(toggle)
    }, 300)
  }
  //纵向
  const clickEvent =
    context.mode === 'vertical'
      ? {
          onClick: handClick,
        }
      : {}
  //横向
  const hoverEvent =
    context.mode !== 'vertical'
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handMouse(e, true)
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handMouse(e, false)
          },
        }
      : {}

  const renderChildren = () => {
    const childrenComponent = React.Children.map(
      children,
      (child: any, i: number) => {
        const childElement = child as FunctionComponentElement<MenuItemProps>
        if (childElement.type.displayName === 'MenuItem') {
          return React.cloneElement(childElement, {
            index: `${index}-${i}`,
          })
        } else {
          console.error(
            'Warning: SubMenu has a child which is not a MenuItem component'
          )
        }
        return null
      }
    )
    return (
      <Transition in={menuOpen} timeout={300} animation="zoom-in-top">
        <ul className={submenuClasses}>{childrenComponent}</ul>
      </Transition>
    )
  }
  return (
    <li key={index} className={classes} {...hoverEvent}>
      <div className="Burn-submene-title" {...clickEvent}>
        {title}
        <div className="tranfrom">
          <Icon name="xia1"></Icon>
        </div>
      </div>
      {renderChildren()}
    </li>
  )
}
SubMenu.displayName = 'SubMenu'
export default SubMenu
