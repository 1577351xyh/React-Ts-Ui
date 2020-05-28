import * as React from 'react'
import './index.scss'
import classnames from 'classnames'

interface Iprops {
  type?: 'primary' | 'dashed' | 'link'
}

export default function Button(props: Iprops) {
  const className = classnames({
    button: true,
    primart: props.type === 'primary',
  })

  console.log(props)
  return <div className={className}>按钮</div>
}
