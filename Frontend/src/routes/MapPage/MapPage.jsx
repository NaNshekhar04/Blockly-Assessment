import "./mapPage.scss";
import 'leaflet/dist/leaflet.css';
import {MapContainer, TileLayer, Marker} from "react-leaflet";
import "leaflet-routing-machine";
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import Header from "../../../components/Header/Header";
import Route from "../../../components/Router/Route";
import { useLocation } from "react-router-dom";

function MapPage() {
    const location = useLocation();
    // console.log(location.search);

    const params = new URLSearchParams(location.search);
    const startParams = params.get('startLocation').split(",");
    const destParams = params.get('destination').split(",");
    // console.log(startParams, destParams);
  return (
    <div className="mapPage-container">
        <Header/>
        <MapContainer center={[48.8566, 2.3522]} zoom={11}>
            <TileLayer
                attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url= 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            />

      {/* <Marker position={[48.86, 2.3552]}>

      </Marker> */}

            <Route start={startParams} dest={destParams}/>

        </MapContainer>
    </div>
  )
}

export default MapPage
