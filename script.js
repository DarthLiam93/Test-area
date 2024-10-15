let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  // Initialize the map
  map = new Map(document.getElementById("map"), {
    center: { lat: 34.644, lng: -97.161 },
    zoom: 15,
  });

  // Set the source for the KML layer
  const src = 'https://github.com/DarthLiam93/Test-area/blob/test-branch/WynnewoodPrimaryLines.kml';
  const src = 'https://https://github.com/DarthLiam93/Test-area/blob/test-branch/WynnewoodPrimaryLines.kml';

  // Create the KML layer
  const kmlLayer = new google.maps.KmlLayer({
    url: src,
    suppressInfoWindows: true,
    preserveViewport: false,
    map: map
  });
}

initMap();
