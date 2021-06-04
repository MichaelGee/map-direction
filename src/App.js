import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const App=()=> {
  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_API}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker position={center}/>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(App)