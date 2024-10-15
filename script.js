let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  // Initialize the map
  map = new Map(document.getElementById("map"), {
    center: { lat: 34.644, lng: -97.161 },
    zoom: 15,
  });

  // Set the source for the KML layer
  const src = 'https://www.google.com/maps/d/u/0/kml?forcekml=1&mid=1dA7PUZTCP12TZ5QE0QaaSbspttkbpZs&lid=0521LZf3y08';
const ctaLayer = new google.maps.KmlLayer({
    url: "https://googlearchive.github.io/js-v2-samples/ggeoxml/cta.kml",
    map: map,
  });
}
