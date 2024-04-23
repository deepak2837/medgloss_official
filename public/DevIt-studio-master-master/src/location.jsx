import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Card } from 'react-bootstrap';
import 'leaflet/dist/leaflet.css';
import './location.css';

const OurLocation = () => {
  const position = [40.7128, -74.0060];
  const phoneNumber = '08495846779';
  const emailAddress = 'info@newlightassociate.in';

  const mapBounds = [
    [12.946199982868091, 77.55797873090992], // Southwest coordinates
    
  ];

  const handlePhoneClick = () => {
    window.open(`tel:${phoneNumber}`);
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <Card className="our-location-card">
      <Card.Body className="our-location-container">
        <div className="map-container">
          <MapContainer
            center={position}
            zoom={15}
            style={{ width: '100%', height: '300px', marginTop: "50px", marginBottom: "120px" }}
            maxBounds={mapBounds}
            maxBoundsViscosity={1.0}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                <strong>Our Location</strong>
                <br />
                Address: #45/3, 8th main, 2nd Block, SBM Colony, Hanumanth Nagar, BSK 1st stage, Banashankari, Bengaluru, Karnataka - 560050, Bangalore, India, Karnataka
                <br />
                Phone: <span onClick={handlePhoneClick} style={{ color: 'blue', cursor: 'pointer' }}>{phoneNumber}</span>
                <br />
                Email: <span onClick={handleEmailClick} style={{ color: 'blue', cursor: 'pointer' }}>{emailAddress}</span>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="location-details">
          <h2>Our Location</h2>
          <p>
            Address: #45/3, 8th main, 2nd Block, SBM Colony, Hanumanth Nagar, BSK 1st stage, Banashankari, Bengaluru, Karnataka - 560050, Bangalore, India, Karnataka
            <br />
            Phone: <span onClick={handlePhoneClick} style={{ color: 'blue', cursor: 'pointer' }}>{phoneNumber}</span>
            <br />
            Email: <span onClick={handleEmailClick} style={{ color: 'blue', cursor: 'pointer' }}>{emailAddress}</span>
          </p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default OurLocation;
