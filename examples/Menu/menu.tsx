import React, { FC, useState, createContext, CSSProperties } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './menuItem'

type MenuMode = 'horizontal' | 'vertical'
export interface MenuProps {
  mode?: MenuMode
  className?: string
  style?: CSSProperties
  defaultIndex?: string
  onSelect?: (selectedIndex: string) => void
}

interface IMenuContext {
  index: string
  onSelect?: (selectedIndex: string) => void
}

export const MenuContext = createContext<IMenuContext>({ index: '0' })
export const Menu: FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex, onSelect } = props
  const [currentAcitive, setcurrentAcitive] = useState(defaultIndex)
  const classes = classNames('Burn-menu', className, {})
  const handeClick = (index: string) => {
    setcurrentAcitive(index)
  }

  const passedContest: IMenuContext = {
    index: currentAcitive ? currentAcitive : '0',
    onSelect: handeClick,
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<
        MenuItemProps
      >
      const { displayName } = childElement.type
      if (displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: index.toString(),
        })
      } else {
        console.error(
          'Warning: Menu has a child which is not a MenuItem component'
        )
      }
      return null
    })
  }
  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContest}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

export default Menu
