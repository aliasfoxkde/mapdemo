import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';

// Initialize the map
const map = new maplibregl.Map({
  container: 'map', // container ID
  // style: 'https://demotiles.maplibre.org/style.json', // style URL
  // style: './themes/OpenStreetMap.json', // style URL
  style: './themes/sample.json', // Get list dynmaically for drop down
  center: [0, 0], // starting position [lng, lat]
  zoom: 1, // starting zoom
});

// Add controls
map.addControl(new maplibregl.FullscreenControl(), 'top-right');
map.addControl(new maplibregl.NavigationControl(), 'top-left');
map.addControl(new maplibregl.ScaleControl({ unit: 'metric' }));
map.addControl(new maplibregl.GeolocateControl({ trackUserLocation: true }));

// Add a marker
const marker = new maplibregl.Marker().setLngLat([0, 0]).addTo(map);

// Add a popup
const popup = new maplibregl.Popup({ offset: 25 })
  .setLngLat([0, 0])
  .setHTML('<h1>Hello World</h1>')
  .addTo(map);
