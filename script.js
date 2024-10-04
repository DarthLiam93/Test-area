let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 34.644, lng: -97.161} ,
    zoom: 15,
  });
}

initMap();
