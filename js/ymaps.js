ymaps.ready(function() {
	var myMap = new ymaps.Map(
			'map',
			{
				center: [ 59.939346, 30.329383 ],
				zoom: 16,
				controls: []
			},
			{
				suppressMapOpenBlock: true
			},
			{
				searchControlProvider: 'yandex#search'
			}
		),
		myPlacemark = new ymaps.Placemark(
			[ 59.938669, 30.323057 ],
			{},
			{
				iconLayout: 'default#image',
				iconImageHref: './img/pin.svg',
				iconImageSize: [ 218, 142 ],
				iconImageOffset: [ -39, -139 ]
			}
		);
	myMap.geoObjects.add(myPlacemark);
	myMap.controls.remove('rulerControl');
	myMap.controls.remove('searchControl');
	myMap.controls.remove('trafficControl');
	myMap.controls.remove('typeSelector');
	myMap.controls.remove('zoomControl');
	myMap.controls.remove('geolocationControl');
	myMap.controls.remove('routeEditor');
});
