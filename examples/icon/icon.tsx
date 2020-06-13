import * as React from 'react'
import './index.scss'

interface Icon {
  name: string,
}
const Icon: React.FC<Icon>=(props) => {
  return (
    <svg className="Burn-icon" aria-hidden="true">
      <use xlinkHref={`#icon-${props.name}`}></use>
    </svg>
  )
}
export default Icon

