import * as React from 'react'
import './index.scss'
import * as classnames from 'classnames'
import typeButton from 'type/button'

export default (props: typeButton) => {
  const className: string = classnames({
    button: true,
    primart: props.type === 'primary',
    link: props.type === 'link',
    dashed: props.type === 'dashed',
  })
  return <div className={className}>{props.children && props.children}</div>
}
