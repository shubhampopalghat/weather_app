import React from "react";
import './Map.css'

function Map() {
    return (
        <div className="map">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d94095.35629693847!2d73.8069310439022!3d18.5102694326283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1712872362265!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
    )
}

export default Map;

Map.js
// import React from 'react';
// import { GoogleMap, LoadScript } from '@react-google-maps/api';

// const Map = () => {
//   const mapContainerStyle = {
//     width: '100%',
//     height: '400px'
//   };

//   const center = {
//     lat: 40.7128,
//     lng: -74.006
//   };

//   const zoom = 10;

//   return (
//     <LoadScript
//       googleMapsApiKey="vedantmpatil27@gmail.com"
//     >
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         center={center}
//         zoom={zoom}
//       />
//     </LoadScript>
//   );
// };

// export default Map;

