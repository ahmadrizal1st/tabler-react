/// <reference types="vite/client" />

declare module 'fslightbox-react' {
  import { ComponentType } from 'react'

  interface FsLightboxProps {
    sources: string[]
    type?: string
    slide?: number
    source?: string
    customSources?: any[]
    customAttributes?: Record<string, any>
    maxYoutubeVideoWidth?: number
    maxYoutubeVideoHeight?: number
    disableLocalStorage?: boolean
    openOnMount?: boolean
    toggler?: boolean
    onlyOneSourceInstance?: boolean
    loadOnlySourceAfterSlideChange?: boolean
    onInit?: () => void
    onOpen?: () => void
    onClose?: () => void
    onShow?: (slideIndex: number) => void
    onSlideChange?: (slideIndex: number) => void
  }

  const FsLightbox: ComponentType<FsLightboxProps>
  export default FsLightbox
}
