let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  // Initialize the map
  map = new Map(document.getElementById("map"), {
    center: { lat: 34.644, lng: -97.161 },
    zoom: 15,
  });


  // Create the KML layer
const ctaLayer = new google.maps.KmlLayer({
    url: "https://www.google.com/maps/d/u/0/kml?forcekml=1&mid=1dA7PUZTCP12TZ5QE0QaaSbspttkbpZs&lid=0521LZf3y08",
    map: map,
  });
    suppressInfoWindows: false,
    preserveViewport: false,
    map: map
  });
}

initMap();
