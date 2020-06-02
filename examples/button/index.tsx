import * as React from 'react'
import './index.scss'
import * as classnames from 'classnames'
import Icon from '../icon/index'

interface Button {
  type?: 'primary' | 'dashed' | 'link'
  children?: string
  icon?: string
  href?: string
}

export default (props: Button) => {
  const className: string = classnames({
    button: true,
    primart: props.type === 'primary',
    link: props.type === 'link',
    dashed: props.type === 'dashed',
    'buuton-icon': props.type && props.children,
  })

  let icon
  let href
  let content
  props.icon ? (icon = <Icon name={props.icon}></Icon>) : null
  props.href ? (href = <a href={props.href}>{props.children}</a>) : null
  props.href ? (content = href) : (content = props.children && props.children)

  
  return (
    <div className={className}>
      {icon}
      {content}
    </div>
  )
}
