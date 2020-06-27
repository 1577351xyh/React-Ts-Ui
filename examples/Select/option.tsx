import * as React from 'react'
import * as classnames from 'classnames'
import { FC, CSSProperties, useContext } from 'react'
import { SelectContext } from './select'

export interface OptionProps {
  className?: string
  style?: CSSProperties
  value?: any
  disabled?: boolean
  children: any
}

export const Option: FC<OptionProps> = (props) => {
  const { className, style, children, value, disabled } = props
  const context = useContext(SelectContext)
  const classes = classnames('Burn-selecte', className, {
    disabled: disabled,
  })
  const handleClick = () => {
    if (context.multiple) {
      context.multipleClick &&
        context.multipleClick({
          lable: (children as string) || '',
          keys: (value as string) || '',
        })
    } else {
      context.Active &&
        context.Active({
          lable: (children as string) || '',
          keys: (value as string) || '',
        })
      context.selecteOpen && context.selecteOpen(false)
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
