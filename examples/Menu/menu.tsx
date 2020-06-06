import React, { FC, useState, createContext, CSSProperties } from 'react'
import classNames from 'classnames'

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
  const classes = classNames('menu', className, {})
  const handeClick=(index:string)=>{
    setcurrentAcitive(index)
  }
  const passedContest: IMenuContext = {
    index: currentAcitive ? currentAcitive : '0',
    onSelect:handeClick
  }

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContest}>
        {children}
      </MenuContext.Provider>
    </ul>
  )
}

export default Menu
