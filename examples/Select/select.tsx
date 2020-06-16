import * as React from 'react'
import * as classnames from 'classnames'
import {
  FC,
  CSSProperties,
  createContext,
  ChangeEvent,
  useState,
  useRef,
  useEffect,
} from 'react'
import Input, { InputProps } from '../Input/input'
import { OptionProps } from './option'
import Transition from '../Transition'
import useClickOutside from 'hooks/useClickOutside'
export interface SelectProps extends Omit<InputProps, 'onSelect'> {
  className?: string
  style?: CSSProperties
  // 多选
  mode?: boolean
  // 单选模式可搜索
  showSearch?: boolean
  Active?: (value: string) => void
  selecteOpen?: (open: boolean) => void
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
  const [inputValue, setValue] = useState(defaultValue as string)
  const [optionOpen, setOptionOpen] = useState(false)
  const componentRef = useRef<HTMLDivElement>(null)
  useClickOutside(componentRef, () => {
    setOptionOpen(false)
  })
  const handeClick = (value: string) => {
    setValue(value)
  }
  const SelectContestValue: SelectProps = {
    value: defaultValue || '',
    Active: handeClick,
    selecteOpen: setOptionOpen,
  }

  // 非受控组件
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setValue(value)
    if (showSearch) {
      renderChildren(inputValue)
    }
  }

  const isShowSearch = () => {
    if (showSearch) {
      return false
    }
    return true
  }

  const renderChildren = (inputValue: string) => {
    return React.Children.map(children, (child, index) => {
      const childrenElement = child as React.FunctionComponentElement<
        OptionProps
      >
      const { displayName } = childrenElement.type
      const { children, value } = childrenElement.props
      if (displayName === 'Option') {
        if (!showSearch) {
          return React.cloneElement(childrenElement, {})
        }
        if (value.indexOf(inputValue) > -1 || !inputValue) {
          return React.cloneElement(childrenElement, {})
        } else {
          return null
        }
      } else {
        console.error(
          'Warning: Menu has a child which is not a Option component'
        )
        return null
      }
    })
  }

  const clickOut = () => {
    setOptionOpen(!optionOpen)
  }

  return (
    <SelectContext.Provider value={SelectContestValue}>
      <div className={classes} style={style} ref={componentRef}>
        <div onClick={clickOut}>
          <Input
            {...resProps}
            onChange={handleChange}
            value={inputValue}
            readOnly={isShowSearch()}
          ></Input>
        </div>

        <Transition in={optionOpen} timeout={300} animation="zoom-in-top">
          <ul className="Burn-select-warpper">{renderChildren(inputValue)}</ul>
        </Transition>
      </div>
    </SelectContext.Provider>
  )
}
export default Select
