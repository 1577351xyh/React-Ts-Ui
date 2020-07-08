import * as React from 'react'
import * as classnames from 'classnames'
import { FC } from 'react'
import { useState } from 'react'
import Button from 'examples/Button'
export interface PagerProps {
  current?: number
  total: number
  defaultCurrent?: number
  className?: string
  style?: string
}

const Pager = (props: PagerProps) => {
  const { current, className, style, total, defaultCurrent } = props
  const arr = range(1, total)
  const classes = classnames('Burn-pager', className, {})
  const itemPager = classnames('Burn-item', className, {})

  function range(start: number, end: number): number[] {
    const result: number[] = []
    for (let i = start; i <= end; i++) {
      result.push(i)
    }
    return result
  }

  const renderChidren = () => {
    return arr.map((item) => {
      return <span key={item} className={itemPager}>{item}</span>
    })
  }
  return (
    <div className={classes}>
      <Button icon="left"></Button>
      {renderChidren()}
      <Button icon="right"></Button>
    </div>
  )
}

export default Pager
