const apiKey = 'pk.eyJ1IjoiemVsbGVya3lsZSIsImEiOiJjbHRjMmQ4a3MxeXhlMmltZzE5YWFnYXNhIn0.pDH1w7cv74wAlBizKyozAg'

var baselayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { 
    attribution: 'Sources: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> | ©  <a href="https://www.mapbox.com/">mapbox</a>',
    accessToken : apiKey
});

// Point Markers

var popup1Content = '<div style="text-align:center">Washington State<br>Department of Natual Resources <br><br><img src="WSDNR.jpg"/></div>'
    popup2Content = '<div style="text-align:center">Washington State<br>Capitol Building<br><br><img src="capitol.jpg" width="300" height="200"/></div>'
    popup3Content = '<div style="text-align:center">City of Olympia<br>Public Works<br><br><img src="OlympiaLogo.png" style="background-color:blue" width="200" height="300"></img></div>'

var wsdnr = L.marker([47.03729292220926, -122.897716286525629]).bindPopup(popup1Content);
    cptbuilding = L.marker([47.0356002779311, -122.90491985770511]).bindPopup(popup2Content);
    pbworks = L.marker([47.03624926561284, -122.88823399607365]).bindPopup(popup3Content);

var markers = L.layerGroup([wsdnr, cptbuilding, pbworks])

// Circle Markers

var college = L.circle([47.073132842750574, -122.9769339252619], {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.5,
    radius: 300
});

college.bindPopup("Evergreen State College Campus")

var park = L.circle([47.021817119834054, -122.90199643959917], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: .3,
    radius: 150

});

park.bindPopup("Center of Tumwater Historical Park")

var mall = L.circle([47.041975706980615, -122.93512634410067], {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: .5,
    radius: 300
});

mall.bindPopup("Campus of Capital Mall")

var circles = L.layerGroup([college, park, mall])

// Zone Markers

var citylim = L.polygon([
    [47.08015141785749, -122.93708634212129],
    [47.02005151256435, -122.96236872957095],
    [47.02261352924794, -122.89796103640829],
    [46.98601283033552, -122.86550736955688],
    [46.983576804241316, -122.82551689977848],
    [47.06809101954492, -122.83612448401068], 
    ],
{
    color: 'yellow',
    fillColor: 'yellow',
    fillOpacity: '0.4'
});

citylim.bindPopup("Approximate Olymipa City Limits")

var marina = L.polygon([
    [47.053211574197825, -122.89906304233261],
    [47.057329155268796, -122.89978534757846],
    [47.05897609867411, -122.89698457213545],
    [47.05352291460922, -122.89542203425671],
],
{
    color: 'darkblue',
    fillColor: 'darkblue',
    fillOpacity: '.3'
});

marina.bindPopup("Swantown Marina & Boatworks")

var watershed = L.polygon([
    [47.034967837208086, -122.88726191923811],
    [47.029797265871764, -122.88503071319664],
    [47.02763426390215, -122.8776429420816],
    [47.0236121991011, -122.8776429420816],
    [47.0242543978448, -122.88924521349719],
    [47.03168982069167, -122.89177391367753],
],
{
    color: 'purple',
    fillColor: 'purple',
    fillOpacity: '.3'
});

watershed.bindPopup("Watershed Park")

var zones = L.layerGroup([citylim, marina, watershed])

var map = L.map('map', {
    layers: [baselayer, markers, circles, zones]
}).setView([47.04, -122.90], 13);

var baseMap = {
    "BaseMap": baselayer,
};

var pointsOfIntrest = {
    "Markers": markers,
    "Circles": circles,
    "Zones": zones
};

var layerControl = L.control.layers(null, pointsOfIntrest).addTo(map);
