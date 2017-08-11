// function initialize () {
//   var myLatlng = new google.maps.LatLng(55.7531262, 37.6203079);
//   var mapOptions = {
//     center: myLatlng,
//     zoom: 16,
//     mapTypeId: google.maps.MapTypeId.ROADMAP,
//     scrollwheel: false,
//   };

//   var map = new google.maps.Map(document.getElementById('map'), mapOptions);

//   var marker = new google.maps.Marker({
//     position: myLatlng,
//     map: map,
//     icon: '/assets/kontur_elba/img/ico/map-balloon.png'
//   });
// }

function initialize () {
  var myLatlng = new google.maps.LatLng(55.84013, 37.1749);
  var myLatlngCent;
  if($('.contacts__map').css('height') != '250px') {
    myLatlngCent = new google.maps.LatLng(55.84013, 37.1749);
    myLatlngMoscow = new google.maps.LatLng(55.749197, 37.603901);
    myLatlngIstra = new google.maps.LatLng(55.913610, 36.857115);
    myLatlngKrasnogorsk = new google.maps.LatLng(55.832025, 37.286722);
    
    // map marker of specialists departures
    myLatlngSpec1 = new google.maps.LatLng(55.805925, 37.396591);
    myLatlngSpec2 = new google.maps.LatLng(55.826668, 37.445343);
    myLatlngSpec3 = new google.maps.LatLng(55.795791, 37.511567);
    myLatlngSpec4 = new google.maps.LatLng(55.848269, 37.439088);
    myLatlngSpec5 = new google.maps.LatLng(55.797271, 37.460168);
    myLatlngSpec6 = new google.maps.LatLng(55.781745, 37.481320);
    myLatlngSpec7 = new google.maps.LatLng(55.723751, 37.452024);
    myLatlngSpec8 = new google.maps.LatLng(55.702642, 37.466560);
    myLatlngSpec9 = new google.maps.LatLng(55.717560, 37.414124);
  }
  else {
    myLatlngCent = myLatlng;
  }
  var mapOptions = {
    center: myLatlngCent,
    zoom: 11,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
  };

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var markerMoscow = new google.maps.Marker({
    position: myLatlngMoscow,
    map: map,
    title: 'Москва, Большой Знаменский пер., 8/12 стр',
    icon: '/assets/kontur_elba/img/ico/map-balloon.png'
  });
  var markerNakhabino = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Нахабино, ул. Институтская, д. 13, к. 1',
    icon: '/assets/kontur_elba/img/ico/map-balloon.png'
  });
  var markerIstra = new google.maps.Marker({
    position: myLatlngIstra,
    map: map,
    title: 'Истра, ул. Пролетарская, д. 1, оф. 11',
    icon: '/assets/kontur_elba/img/ico/map-balloon.png'
  });
  var markerKrasnogorsk = new google.maps.Marker({
    position: myLatlngKrasnogorsk,
    map: map,
    title: 'Красногорск, ул. Вилора Трифонова, д. 6',
    icon: '/assets/kontur_elba/img/ico/map-balloon.png'
  });
  
  // map marker of specialists departures
  var markerSpec1 = new google.maps.Marker({
    position: myLatlngSpec1,
    map: map,
    title: 'Выезд специалиста: Москва, б-р Строгинский, 1',
    icon: 'assets/kontur_elba/img/ico/map-balloon-spec-h43.png'
  });
  var markerSpec2 = new google.maps.Marker({
    position: myLatlngSpec2,
    map: map,
    title: 'Выезд специалиста: Москва, ул. Тушинская, 17',
    icon: 'assets/kontur_elba/img/ico/map-balloon-spec-h43.png'
  });
  var markerSpec3 = new google.maps.Marker({
    position: myLatlngSpec3,
    map: map,
    title: 'Выезд специалиста: Москва, ул. Новопесчаная, 16к1',
    icon: 'assets/kontur_elba/img/ico/map-balloon-spec-h43.png'
  });
  var markerSpec4 = new google.maps.Marker({
    position: myLatlngSpec4,
    map: map,
    title: 'Выезд специалиста: Москва, ул. Сходненская, 35к1',
    icon: 'assets/kontur_elba/img/ico/map-balloon-spec-h43.png'
  });
  var markerSpec5 = new google.maps.Marker({
    position: myLatlngSpec5,
    map: map,
    title: 'Выезд специалиста: Москва, ул. Рогова, 12к1с1',
    icon: 'assets/kontur_elba/img/ico/map-balloon-spec-h43.png'
  });
  var markerSpec6 = new google.maps.Marker({
    position: myLatlngSpec6,
    map: map,
    title: 'Выезд специалиста: Москва, ул. Народного ополчения, 28',
    icon: 'assets/kontur_elba/img/ico/map-balloon-spec-h43.png'
  });
  var markerSpec7 = new google.maps.Marker({
    position: myLatlngSpec7,
    map: map,
    title: 'Выезд специалиста: Москва, Кутузовский проспект, 71',
    icon: 'assets/kontur_elba/img/ico/map-balloon-spec-h43.png'
  });
  var markerSpec8 = new google.maps.Marker({
    position: myLatlngSpec8,
    map: map,
    title: 'Выезд специалиста: Москва, ул. Матвеевская, 20к3',
    icon: 'assets/kontur_elba/img/ico/map-balloon-spec-h43.png'
  });
  var markerSpec9 = new google.maps.Marker({
    position: myLatlngSpec9,
    map: map,
    title: 'Выезд специалиста: Москва, Можайское шоссе, 39',
    icon: 'assets/kontur_elba/img/ico/map-balloon-spec-h43.png'
  });
}
if(document.getElementById('map') != null) {
  google.maps.event.addDomListener(window, 'load', initialize);
}