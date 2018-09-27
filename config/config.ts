export const config = {
  production: false,
  api_url: 'http://localhost:5000/api',
  image_upload_url: "http://localhost:5200/api/image/upload",
  image_load_url: "http://localhost:5200/uploads/",
  file_upload_URL: "http://localhost:5200/api/file/upload",
  scheduleCreatedStatus: "Schedule Created",
  scheduleAlreadyExsits: "Schedule Already Exists",
  socket_url: 'http://localhost:5000/',
  mapStyle: [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "transit.station.bus",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "transit.station.bus",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "transit.station.bus",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ff0000"
        },
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ],
  timeSlotTemplate: [
    {
      "startTime": "04.00",
      "endTime": "06.30",
      "fixedInterval": "30",
      "noOfBusses": "6",
      "passengerAverage": [10, 25, 20, 30, 45]
    },
    {
      "startTime": "06.30",
      "endTime": "07.30",
      "fixedInterval": "10",
      "noOfBusses": "9",
      "passengerAverage": [50, 54, 53, 58, 70, 90]
    },
    {
      "startTime": "07.30",
      "endTime": "08.30",
      "fixedInterval": "15",
      "noOfBusses": "8",
      "passengerAverage": [85, 75, 82, 81]
    },
    {
      "startTime": "08.30",
      "endTime": "10.00",
      "fixedInterval": "20",
      "noOfBusses": "8",
      "passengerAverage": [73, 68, 47, 40, 48]
    },
    {
      "startTime": "10.00",
      "endTime": "12.30",
      "fixedInterval": "30",
      "noOfBusses": "7",
      "passengerAverage": [45, 47, 55, 62, 71]
    },
    {
      "startTime": "12.30",
      "endTime": "13.30",
      "fixedInterval": "15",
      "noOfBusses": "8",
      "passengerAverage": [77, 75, 68, 81]
    },
    {
      "startTime": "13.30",
      "endTime": "14.30",
      "fixedInterval": "10",
      "noOfBusses": "13",
      "passengerAverage": [77, 85, 90, 72, 67, 62]
    },
    {
      "startTime": "14.30",
      "endTime": "15.30",
      "fixedInterval": "15",
      "noOfBusses": "5",
      "passengerAverage": [65, 68, 59, 51]
    },
    {
      "startTime": "15.30",
      "endTime": "16.30",
      "fixedInterval": "30",
      "noOfBusses": "3",
      "passengerAverage": [50, 48]
    },
    {
      "startTime": "16.30",
      "endTime": "18.30",
      "fixedInterval": "30",
      "noOfBusses": "6",
      "passengerAverage": [50, 48, 80, 85]
    },
    {
      "startTime": "18.30",
      "endTime": "20.30",
      "fixedInterval": "30",
      "noOfBusses": "8",
      "passengerAverage": [50, 48, 80, 85]
    },
    {
      "startTime": "20.30",
      "endTime": "23.00",
      "fixedInterval": "30",
      "noOfBusses": "8",
      "passengerAverage": [65, 50, 30, 15, 5]
    }
  ]
};