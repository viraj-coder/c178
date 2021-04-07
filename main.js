mapboxgl.accesToken='pk.eyJ1IjoidmlyYWowMyIsImEiOiJja243YW44N3IwbTc2MnBwOTRobTVxb2VmIn0.0XN6YfBjKxOKn1C8RC1ybw'
let latitude=22.7868542,longitude=88.3643296
var map=new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    centre:[longitude,latitude],
    zoom:16
})

