// src/pages/MapFullsizePage.tsx
import BaseLayout from '../layouts/BaseLayout'
import { MapBox } from '../components/ui'

export default function MapFullsizePage() {
  return (
    <BaseLayout 
      sidebar={true}
      hideTopbar={true}
      wrapperFull={true}
      noContainer={true}
      containerClass="p-0"
    >
      <div className="d-flex flex-fill" style={{ height: '100vh', width: '100%' }}>
        <MapBox 
          id="google" 
          center={[-34.397, 150.644]} 
          zoom={8} 
          style="streets-v11"
        />
      </div>
    </BaseLayout>
  )
}
