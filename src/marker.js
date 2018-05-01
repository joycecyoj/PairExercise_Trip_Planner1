const mapboxgl = require("mapbox-gl");

module.exports = (type, coordinates) => {
  const iconURLs = {
      hotels: "http://i.imgur.com/D9574Cu.png",
      restaurants: "http://i.imgur.com/cqR6pUI.png",
      activities: "http://i.imgur.com/WbMOfMl.png"
  };

  const markerDomEl = document.createElement("div");
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";

  if (type === 'hotel') {
    markerDomEl.style.backgroundImage = `url(${iconURLs["hotels"]})`;
  }
  else if(type === 'activity') {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  }
  else if(type === 'restaurant') {
    markerDomEl.style.backgroundImage = `url(${iconURLs["restaurants"]})`;
  }

return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates)

}
