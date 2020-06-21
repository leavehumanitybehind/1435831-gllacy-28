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
				// РћРїС†РёРё.
				// РќРµРѕР±С…РѕРґРёРјРѕ СѓРєР°Р·Р°С‚СЊ РґР°РЅРЅС‹Р№ С‚РёРї РјР°РєРµС‚Р°.
				iconLayout: 'default#image',
				// РЎРІРѕС‘ РёР·РѕР±СЂР°Р¶РµРЅРёРµ РёРєРѕРЅРєРё РјРµС‚РєРё.
				iconImageHref: './img/pin.svg',
				// Р Р°Р·РјРµСЂС‹ РјРµС‚РєРё.
				iconImageSize: [ 218, 142 ],
				// РЎРјРµС‰РµРЅРёРµ Р»РµРІРѕРіРѕ РІРµСЂС…РЅРµРіРѕ СѓРіР»Р° РёРєРѕРЅРєРё РѕС‚РЅРѕСЃРёС‚РµР»СЊРЅРѕ
				// РµС‘ "РЅРѕР¶РєРё" (С‚РѕС‡РєРё РїСЂРёРІСЏР·РєРё).
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
