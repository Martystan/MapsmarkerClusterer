import { Wrapper} from "@googlemaps/react-wrapper"; 
import Map from "./Map";
import Marker from "./Marker";
import { MarkerClusterer } from "@googlemaps/markerclusterer";

function App() {
  const center = {lat: 45, lng: -75};
  const zoom = 4;
  const positions = [
    {lat: 47, lng: -76},
    {lat: 44, lng: -72}, 
    center
  ]
  
  return (
    <Wrapper apiKey="">
      <Map center = {center} zoom = {zoom}>
        {
          positions.map((position)=>(
            <Marker position={position}/>
          ))
        }
        
        </Map>

    </Wrapper>

    
  );

      }
export default App;
