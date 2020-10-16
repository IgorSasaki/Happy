import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import '../styles/pages/orphanages-map.css';

import mapMarker from '../images/map-marker.svg';
import MapIcon from '../utils/mapIcon';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarker} alt="Happy" />

                    <h2>Escolha um orfanato no Mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Araraquara</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map
                center={[-21.770241, -48.139621]}
                zoom={15}
                style={{
                    width: '100%', height: '100%'
                }}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer> */}
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                >
                </TileLayer>

                <Marker
                    icon={MapIcon}
                    position={[-21.770241, -48.139621]}
                >
                    <Popup closeButton={false} minWidth={240} minHeight={240} className="map-popup">
                        Orfanato
                        <Link to="/orphanages/:id">
                            <FiArrowRight size={20} color="fff" />
                        </Link>
                    </Popup>
                </Marker>

            </Map>

            <Link to="/orphanage/create" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    )
}

export default OrphanagesMap;