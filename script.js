let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  // Initialize the map
  map = new Map(document.getElementById("map"), {
    center: { lat: 34.644, lng: -97.161 },
    zoom: 15,
  });

  // Set the source for the KML layer
  const src = 'https://console.cloud.google.com/google/maps-apis/datasets?project=wynnewood-primary-lines';
  
  // Create the KML layer
  const kmlLayer = new google.maps.KmlLayer({
    url: src,
    suppressInfoWindows: true,
    preserveViewport: false,
    map: map
  });
}

initMap();
