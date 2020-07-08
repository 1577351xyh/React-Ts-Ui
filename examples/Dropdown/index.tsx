import { FC } from 'react'
import MenuDropdowm, { DropdowmProps } from './Dropdown'
import MenuItem, { MenuItemProps } from './MenuItem'
import Dropdowm from './Dropdown'
import SubMenu from './SubMenu'

export type IMenuComponent = FC<DropdowmProps> & {
  Menu: FC<DropdowmProps>
  Item: FC<MenuItemProps>
}

const Menu = MenuDropdowm as IMenuComponent
Menu.Menu = Menu
Menu.Item = MenuItem
export {Dropdowm,SubMenu}
export default Menu
