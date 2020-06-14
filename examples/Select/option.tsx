import * as React from 'react'
import * as classnames from 'classnames'
import { FC, CSSProperties, useContext } from 'react'
import { SelectContext } from './select'

export interface OptionProps {
  className?: string
  style?: CSSProperties
  value?: any
  disabled?: boolean
}

export const Option: FC<OptionProps> = (props) => {
  const { className, style, children, value } = props
  const context = useContext(SelectContext)
  const classes = classnames('Burn-selecte', className, {})
  const handleClick = () => {
    if (context.Active) {
      context.Active(value)
    }
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}
Option.displayName = 'Option'
export default Option