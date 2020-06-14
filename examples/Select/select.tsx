import * as React from 'react'
import * as classnames from 'classnames'
import { FC, CSSProperties, createContext, useState } from 'react'
import Input, { InputProps } from '../Input/input'
import { OptionProps } from './option'
export interface SelectProps extends Omit<InputProps, 'onSelect'> {
  className?: string
  style?: CSSProperties
  // 多选
  mode?: boolean
  // 单选模式可搜索
  showSearch?: boolean
  Active?: (value: string) => void
}

export const SelectContext = createContext<SelectProps>({ value: '' })

export const Select: FC<SelectProps> = (props) => {
  const {
    className,
    style,
    mode,
    showSearch,
    children,
    defaultValue,
    ...resProps
  } = props

  const classes = classnames('Burn-selecte', className, {})
  const [value, setValue] = useState(defaultValue)

  const handeClick = (value: string) => {
    setValue(value)
  }
  const SelectContestValue: SelectProps = {
    value: defaultValue || '',
    Active: handeClick,
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childrenElement = child as React.FunctionComponentElement<
        OptionProps
      >
      const { displayName } = childrenElement.type
      if (displayName === 'Option') {
        return React.cloneElement(childrenElement, {})
      } else {
        console.error(
          'Warning: Menu has a child which is not a Option component'
        )
        return null
      }
    })
  }
  return (
    <SelectContext.Provider value={SelectContestValue}>
      <div className={classes} style={style}>
        <Input {...resProps} value={value} readOnly></Input>
        <ul className="Burn-select-warpper">{renderChildren()}</ul>
      </div>
    </SelectContext.Provider>
  )
}
export default Select
