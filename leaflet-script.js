/* eslint-disable no-undef */
/**
 * Image instead of map
 */


let bounds = [
  [0, 0], // padding
  [2926, 4096], // image dimensions
];


// L.CRS.Simple
//  A simple CRS that maps longitude and latitude into `x` and `y` directly.
// May be used for maps of flat surfaces (e.g. game maps).
let map = L.map("map", {
  crs: L.CRS.Simple,
  maxZoom: 18,
  minZoom: -1.6,
  maxBounds: bounds,
});

// coordinate array with popup text
let points = [
  [1750,990, "Garreg Mach Monatery"],
  [1675,1025, "The Monolith"],
  [1300,1625, "Current Location"]
];

// Used to load and display a single image over
// specific bounds of the map. Extends `Layer`.
var image = L.imageOverlay("ansalon.jpg", bounds).addTo(map);

// method fitBounds sets a map view
// that contains the given geographical bounds with the
// maximum zoom level possible.
map.fitBounds(bounds);

// loop that adds many markers to the map
for (let i = 0; i < points.length; i++) {
  const [lat, lng, popupText] = points[i];

  marker = new L.marker([lat, lng]).bindPopup(popupText).addTo(map);
}