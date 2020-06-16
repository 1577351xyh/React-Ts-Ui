import { RefObject, useEffect } from 'react'

function useClickOutside(ref: RefObject<HTMLElement>, handler: Function) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return
      }
      handler(event)
    }
    document.addEventListener('click', listener)
    return () => {
      document.removeEventListener('click', listener)
    }
    // 相当于监听ref,handler ,要实现munted跨域赋值一个空数组
  }, [ref, handler])
}

export default useClickOutside
