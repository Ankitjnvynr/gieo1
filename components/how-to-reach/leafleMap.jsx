// // File: src/components/how-to-reach/LeafletMap.jsx
// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// // Fix for default marker icon not showing
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
//   iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
// });

// const LeafletMap = ({ transportData }) => {
//   return (
//     <MapContainer
//       center={[29.9695, 76.8783]} // Default center (Kurukshetra)
//       zoom={10}
//       scrollWheelZoom={false}
//       style={{ height: '400px', width: '100%', borderRadius: '10px' }}
//     >
//       <TileLayer
//         attribution='&copy; OpenStreetMap contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       {transportData.map((mode) => (
//         <Marker key={mode.id} position={mode.coordinates}>
//           <Popup>
//             <strong>{mode.title}</strong><br />
//             {mode.summary}
//           </Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// };

// export default LeafletMap;
