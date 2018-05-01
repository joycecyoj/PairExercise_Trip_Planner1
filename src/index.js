// to run: npm run build
// console.log('i ran')

const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = 'pk.eyJ1Ijoiam95Y2VjeW9qMDEiLCJhIjoiY2pnbzRzb3NmMDAyYzMybXZhcTl6MnJtbCJ9.anHSvrKyO4ueFKyfkBgnOg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


// add markers
const marker = buildMarker("hotel", [-74.009151, 40.705086]);

console.log(marker);

marker.addTo(map);


// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);
