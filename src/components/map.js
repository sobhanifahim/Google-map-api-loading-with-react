import { useMemo } from "react";
import './map.css'
import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";

export default function Home() {
    const { isLoaded } = useLoadScript({
      ApiKey: "Your Api key from cloud",
    });
  
    if (!isLoaded) return <div>Please wait while loading</div>;
    return <ShowMapInterface />;
  }

   
  function ShowMapInterface() {
    const center = useMemo(() => ({ lat: 23.81269109304968, lng: 90.42892486039617 }), []);
  
    return (
      <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
        <Marker position={center} />
      </GoogleMap>
    );
  }

