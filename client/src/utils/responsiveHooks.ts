import { useMediaQuery } from 'react-responsive'
import { IHook } from '../types/types'

export const IsDesktopOrLaptop: IHook = () => useMediaQuery({
    query: '(min-width: 1025px)'
  })
export const IsTablet: IHook = () => useMediaQuery({ query: '(max-width: 1024px)' })
