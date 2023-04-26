import { GoogleMap, MarkerF, useLoadScript} from "@react-google-maps/api";
import  React, { useMemo } from "react";
import '../index.css'

export default function Map() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
      });
    const center = useMemo(() => ({ lat: 2.7724, lng: 32.2881 }), []);
  
    
  return (
    <div>
        {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={12}
        >
            <MarkerF 
                position={{ lat: 2.7204438911369886, lng: 32.309806391661276 }} 
                icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
                label={{text: 'Acholi Education Initiative',color:'#000'}}
            />
        </GoogleMap>
      )}
    </div>
  )
}
