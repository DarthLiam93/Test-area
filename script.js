let map;

  async function fetchMarkers() {
    const response = await fetch('http://localhost:3000/markers'); // Adjust URL if needed
    return await response.json();
}
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  // Initialize the map
  map = new Map(document.getElementById("map"), {
    center: { lat: 34.644, lng: -97.161 },
    zoom: 15,
  });

  // Create the KML layer
  const kmlLayer = new google.maps.KmlLayer({
    url: "https://raw.githubusercontent.com/DarthLiam93/Test-area/refs/heads/test-branch/WynnewoodPrimaryLines.kml",
    suppressInfoWindows: false,
    preserveViewport: false,
    map: map
  });
    const markers = await fetchMarkers();
      markers.forEach(marker => {
        new google.maps.Marker({
          position: { lat: marker.lat, lng: marker.lng },
          map: map,
          title: marker.title,
            });
            });
}

initMap();
