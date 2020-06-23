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
import Icon from '../Icon'
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
  // 多选
  multiple?: boolean
  Active?: (value: string) => void
  selecteOpen?: (open: boolean) => void
  multipleClick?: (value: object) => void
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
    multiple,
    onChange,
    ...resProps
  } = props
  const classes = classnames('Burn-selecte', className, {})
  const [inputValue, setValue] = useState(defaultValue as string)
  const [optionOpen, setOptionOpen] = useState(false)
  let [select, setSelecte] = useState<any>([])
  const componentRef = useRef<HTMLDivElement>(null)
  useClickOutside(componentRef, () => {
    setOptionOpen(false)
  })
  const handeClick = (value: any) => {
    setValue(value)
    onChange && onChange(value)
  }
  const handClose = (e: any, index: number) => {
    e.stopPropagation()
    // 根据key 来删除
    select.forEach((i: any, j: number) => {
      if (i.key === index.toString()) {
        select.splice(j, 1)
      }
    })
    setSelecte(Object.assign([], select))
  }
  const multipleClick = (childrenItem: any) => {
    let indexOf = true
    select.forEach((element: any) => {
      const el = element.props.children[0]
      if (el === childrenItem.lable) {
        indexOf = false
      }
    })
    if (!indexOf) return
    let arr = select.map((vm: any) => vm.props.children[0])
    renderSelect(arr, childrenItem)
  }
  const renderSelect = (arr: [string], childrenItem: any) => {
    select = [...arr, childrenItem.lable].map((item: any, index: number) => {
      return typeof item === 'string' ? (
        <span key={index}>
          {item}
          <span onClick={(e) => handClose(e, index)}>
            <Icon name="cha"></Icon>
          </span>
        </span>
      ) : (
        item
      )
    })
    setSelecte(select)
  }
  const SelectContestValue: SelectProps = {
    value: defaultValue || '',
    Active: handeClick,
    multipleClick: multipleClick,
    selecteOpen: setOptionOpen,
    multiple: multiple,
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
          {select.length !== 0 ? (
            <div className="Burn-select-multiple">{select}</div>
          ) : null}
        </div>

        <Transition in={optionOpen} timeout={300} animation="zoom-in-top">
          <ul className="Burn-select-warpper">{renderChildren(inputValue)}</ul>
        </Transition>
      </div>
    </SelectContext.Provider>
  )
}
export default Select
