import * as React from 'react'
import '../index.scss'
// import { useState } from 'react'

interface TabPane {
  children?: string | ''
  tab: string
  key: any
}
export default (props: TabPane) => {
  // console.log(props)
  // const [active, setActive] = useState(0)
  return (
    <div>
      <div>{props.children}</div>
    </div>
  )
}
