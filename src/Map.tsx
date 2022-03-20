import React, {useRef, useEffect, ReactNode, useState, ReactElement} from 'react'
import { MarkerClusterer } from '@googlemaps/markerclusterer';

const  Map = ({center, zoom, children}: {center: google.maps.LatLngLiteral, zoom:number, children:ReactNode}) =>{
    const ref = useRef();
    const [map, setMap] = useState<google.maps.Map | null>(null)
    const style = {height: "100vh"}
    
    

    useEffect(() => {
        setMap(new window.google.maps.Map(ref.current, {}));
    },[]);
          
    if (map)  {
        map.setCenter(center)
        map.setZoom(zoom)
    }
    
    return <div  style = {style} ref={ref} id="map">
        {React.Children.map(children,(child: ReactElement)=> React.cloneElement(child, {map}))}
    </div> ;
  
    
    
    
  }
  
  export default Map;