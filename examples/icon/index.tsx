import * as React from 'react'
import './index.scss'

interface Icon {
  name: string
}
export default (props: Icon) => {
  return (
    <svg className="icon" aria-hidden="true">
      <use xlinkHref={`#icon-${props.name}`}></use>
    </svg>
  )
}
