import * as React from 'react'
import * as classnames from 'classnames'
import Icon from '../Icon/icon'
import { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

interface BaseButtonProps {
  types?: ButtonType
  size?: ButtonSize
  children?: React.ReactNode
  icon?: string
  href?: string
  className?: string
  disabled?: boolean;
}
type ButtonSize = 'lg' | 'sm'
type ButtonType = 'primary' | 'default' | 'danger' | 'link' | 'dashed'
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

export const Button: FC<ButtonProps> = (props) => {
  const {
    types,
    className,
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props
  const classNames: string = classnames('button', className, {
    [`btn-${types}`]: types,
    [`btn-${size}`]: size,
    'buuton-icon': types && props.children,
    'disabled':disabled,
  })

  let icon
  let hrefs
  let content
  props.icon ? (icon = <Icon name={props.icon}></Icon>) : null
  href
    ? (hrefs = (
        <a href={href} {...restProps}>
          {props.children}
        </a>
      ))
    : null
  href ? (content = hrefs) : (content = props.children && props.children)

  return (
    <div className={classNames} {...restProps}>
      {icon}
      {content}
    </div>
  )
}
Button.defaultProps = {
  disabled: false,
  types: 'default',
}

export default Button
