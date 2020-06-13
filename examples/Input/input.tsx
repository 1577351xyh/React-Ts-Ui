import React, {
  FC,
  useState,
  createContext,
  InputHTMLAttributes,
  CSSProperties,
  ReactElement,
  ChangeEvent,
} from 'react'
import classNames from 'classnames'
import Icon from '../Icon'

type InputSize = 'lg' | 'sm'
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  // 禁用
  disabled?: boolean
  size?: InputSize
  icon?: string
  // 前缀
  prepend?: string | ReactElement
  // 后缀
  append?: string | ReactElement
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  style?: CSSProperties
}

export const Input: FC<InputProps> = (props) => {
  const { disabled, size, icon, prepend, append, style, ...restProps } = props
  const classes = classNames('Burn-input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend,
  })
  return (
    <div className={classes}>
      {prepend && <div className="Burn-input-group-prepend">{prepend}</div>}
      {icon && (
        <div className="icon-wrapper">
          <Icon name={icon}></Icon>
        </div>
      )}
      <input className="Burn-input-inner" disabled={disabled} {...restProps} />
      {append && <div className="Burn-input-group-append">{append}</div>}
    </div>
  )
}

export default Input
