import { useEffect, useRef } from 'react'
import { clsx } from 'clsx'
import mapboxgl from 'mapbox-gl'
import site from '../../data/site.json'

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY || site.mapboxKey

export interface MapMarker {
  name?: string
  center: [number, number]
}

export interface MapBoxProps {
  id: string
  center?: [number, number]
  zoom?: number
  style?: string
  markers?: MapMarker[]
  className?: string
  card?: boolean
}

export function MapBox({
  id,
  center = [52.518827, 13.4049],
  zoom = 13,
  style = 'streets-v11',
  markers = [],
  className,
  card,
}: MapBoxProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let map: mapboxgl.Map | null = null
    let resizeObserver: ResizeObserver | null = null
    let timer: NodeJS.Timeout | null = null

    timer = setTimeout(() => {
      const container = mapContainerRef.current
      if (!container) return

      const styleUrl = style.startsWith('mapbox://') ? style : `mapbox://styles/mapbox/${style}`
      const lngLat: [number, number] = [center[1], center[0]]

      map = new mapboxgl.Map({
        container: container,
        style: styleUrl,
        center: lngLat,
        zoom: zoom,
        trackResize: true,
        renderWorldCopies: true
      })

      if (typeof window !== 'undefined') {
        const win = window as any
        win.tabler_map = win.tabler_map || {}
        win.tabler_map[id] = map
      }

      map.on('load', () => {
        map?.resize()
      })

      resizeObserver = new ResizeObserver(() => {
        map?.resize()
      })
      resizeObserver.observe(container)

      if (markers && Array.isArray(markers)) {
        markers.forEach((marker) => {
          if (marker && marker.center) {
            new mapboxgl.Marker({ color: '#066fd1' })
              .setLngLat([marker.center[1], marker.center[0]])
              .addTo(map!)
          }
        })
      }
    }, 100)

    return () => {
      if (timer) clearTimeout(timer)
      if (resizeObserver) resizeObserver.disconnect()
      if (map) {
        map.remove()
      }
      if (typeof window !== 'undefined' && (window as any).tabler_map) {
        delete (window as any).tabler_map[id]
      }
    }
  }, [id, center, zoom, style, markers])

  const classes = clsx(className, card && 'rounded')

  return (
    <div
      ref={mapContainerRef}
      id={`map-${id}`}
      className={classes}
      style={{ 
        width: '100%', 
        height: '100%', 
        minHeight: '300px', 
        backgroundColor: '#f6f7f8', 
        overflow: 'hidden' 
      }}
    />
  )
}
