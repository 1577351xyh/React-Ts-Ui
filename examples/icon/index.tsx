import * as React from 'react'
import * as classnames from 'classnames'
import './index.scss'

interface Icon {
  name: string
}
export default (props: Icon) => {
  const className: string = classnames({
    icon: true,
  })
  return (
    <div className={className}>
      <svg className="icon" aria-hidden="true">
        <use xlinkHref={`#icon-${props.name}`}></use>
      </svg>
    </div>
  )
}
