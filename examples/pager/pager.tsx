import * as React from 'react'
import * as classnames from 'classnames'
import { FC } from 'react'
import { useState } from 'react'
import Button from 'examples/Button'
export interface PagerProps {
  current?: number | 1
  total: number
  defaultCurrent?: number
  className?: string
  style?: string
  onChange?: (value: number) => void
}

const Pager = (props: PagerProps) => {
  let { current, className, style, total, defaultCurrent, onChange } = props
  if (!current) {
    current = 1
  }
  const [currentValue, setCurrent] = useState(current)
  const classes = classnames('Burn-pager', className, {})
  const itemPager = classnames('Burn-item', className, {})

  function range(start: number, end: number): number[] {
    const result: number[] = []
    for (let i = start; i <= end; i++) {
      result.push(i)
    }
    return result
  }

  const onClickItem = (val: number, e: React.MouseEvent<HTMLSpanElement>) => {
    if (val <= props.total && val >= 1) {
      setCurrent(val)
      onChange && onChange(val)
      renderChidren(currentValue)
    }
  }

  const jumpPage = (index: number, currentValue: number) => {
    const prev = currentValue - 5 <= 0 ? 1 : currentValue - 5
    const next =
      currentValue + 5 >= props.total ? props.total : currentValue + 5
    return index === 1 ? prev : next
  }

  const renderChidren = (currentValue: number) => {
    return range(1, total)
      .filter(
        (item) =>
          item === 1 || item === total || Math.abs(item - currentValue) <= 2
      )
      .reduce((prev, next) => {
        const last = prev[prev.length - 1]
        const x = last !== -1 && last - next < -1
        return prev.concat(x ? [-1, next] : [next])
      }, [] as number[])
      .map((item: any, index: number) =>
        item === -1 ? (
          <span
            key={item}
            onClick={(e) => onClickItem(jumpPage(index, currentValue), e)}
          >
            ...
          </span>
        ) : (
          <span
            key={item}
            className={classnames({
              'Burn-item': true,
              active: item === currentValue,
            })}
            onClick={(e) => onClickItem(item, e)}
          >
            {item}
          </span>
        )
      )
  }

  return (
    <div className={classes}>
      <Button
        icon="left"
        onClick={(e) => onClickItem(currentValue - 1, e)}
      ></Button>
      {renderChidren(currentValue)}
      <Button
        icon="right"
        onClick={(e) => onClickItem(currentValue + 1, e)}
      ></Button>
    </div>
  )
}

export default Pager
