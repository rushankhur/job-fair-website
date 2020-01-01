var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([-63.612474, 44.669336]),
        zoom: 16
    })
});
//Adding a marker on the map
var marker = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([-63.613974, 44.670336])
    ),
});
marker.setStyle(new ol.style.Style({
    image: new ol.style.Icon(({
        src: '../images/map_marker.png',
        scale: 0.1
    }))
}));
var vectorSource = new ol.source.Vector({
    features: [marker]
});
var markerVectorLayer = new ol.layer.Vector({
    source: vectorSource,
});
map.addLayer(markerVectorLayer);