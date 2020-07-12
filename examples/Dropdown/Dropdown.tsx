import * as React from 'react'
import * as classnames from 'classnames'
import {
  FC,
  CSSProperties,
  createContext,
  ChangeEvent,
  useState,
  useRef,
} from 'react'
import Transition from '../Transition'
import useClickOutside from 'hooks/useClickOutside'
import { MenuItemProps } from './MenuItem'
// export const SelectContext = createContext<SelectProps>({ value: '' })
type event = 'click' | 'hover'
export interface DropdowmProps {
  className?: string
  style?: string
  overlayArr?: any
  trigger?: event
  clearOpen?: () => void
}

export const DropdowmContext = createContext<DropdowmProps>({})
export const Dropdowm: FC<DropdowmProps> = (props) => {
  const { className, style, children, overlayArr, trigger, ...resProps } = props
  const [menuOpen, setMenuOpen] = useState(false)
  const classes = classnames('Burn-Dropdowm', className, {})
  const componentRef = useRef<HTMLDivElement>(null)
  useClickOutside(componentRef, () => {
    setMenuOpen(false)
  })

  const clearOpen = () => {}
  const ContestValue: DropdowmProps = {
    clearOpen: clearOpen,
  }

  const isOpen = () => {
    setMenuOpen(!menuOpen)
  }

  const hoverClose = () => {
    if (trigger === 'hover') {
      componentRef.current?.addEventListener('mouseleave', () => {
        setMenuOpen(false)
      })
    }
  }

  hoverClose()
  return (
    <DropdowmContext.Provider value={ContestValue}>
      <div ref={componentRef} className={classes} {...resProps}>
        {trigger === 'click' ? (
          <ul onClick={isOpen}>{children}</ul>
        ) : (
          <ul
            onMouseEnter={() => {
              setMenuOpen(true)
            }}
          >
            {children}
          </ul>
        )}
        <div className="Burn-Dropdowm-warp">
          <Transition
            in={menuOpen}
            timeout={300}
            wrapper
            animation="zoom-in-top"
          >
            {overlayArr}
          </Transition>
        </div>
      </div>
    </DropdowmContext.Provider>
  )
}

Dropdowm.defaultProps = {
  trigger: 'click',
}

export default Dropdowm
