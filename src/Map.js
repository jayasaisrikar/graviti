import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import React, { useState } from 'react';

const apiKey = 'AIzaSyAYBivEevsC3sXYWfY6n9803tvASqB0TUI'; // Replace with your Google Maps API key

const Map = ({ center, zoom }) => (
  <div style={{ width: '400px', height: '400px', backgroundColor: 'grey' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: apiKey }}
      defaultCenter={center}
      defaultZoom={zoom}
      center={center}
      zoom={zoom}
    />
  </div>
);

const MapBox = () => {
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
  const [mapZoom, setMapZoom] = useState(11);

  const fetchLocation = async (query) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${apiKey}`
      );
      return response.data.results[0].geometry.location;
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  };

  // Function to handle search
/*  const handleSearch = async (query) => {
    const location = await fetchLocation(query);
    if (location) {
      setMapCenter({ lat: location.lat, lng: location.lng });
      setMapZoom(15); // Adjust zoom level as needed
    }
  };*/

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Map center={mapCenter} zoom={mapZoom} />
        </div>
      </div>
    </div>
  );
};

export default MapBox;
