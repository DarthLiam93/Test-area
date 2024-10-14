let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  
  map = new Map(document.getElementById("map"), {
    center: { lat: 34.644, lng: -97.161} ,
    zoom: 15,
   
    var kmlLayer = new google.maps.KmlLayer();
    var src = 'https://console.cloud.google.com/google/maps-apis/datasets?project=wynnewood-primary-lines';
    var kmlLayer = new google.maps.KmlLayer(src, {
  suppressInfoWindows: true,
  preserveViewport: false,
  map: map
});
  });
}
initMap();
