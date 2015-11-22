'use strict'

import './map.styl';
import { showModal, hideModal } from '../modal/modal';

export function initMap(btnId, inputId) {
    let elem = document.querySelector(btnId),
        map = new google.maps.Map(document.querySelector('.in-modal-map-container'), {
        center: {lat: 38.8951100, lng: -77.0363700},
        zoom: 15
    }),
    geocoder = new google.maps.Geocoder;

    elem.addEventListener('click', function (e) {
        showModal();
        google.maps.event.trigger(map, 'resize');
    }, false);

    map.addListener('click', function(e) {
        geocoder.geocode({'location': e.latLng}, function(results, status) {
            _setIndex(results.shift(), inputId);
        })
    });

    _getUserLocation(map);
};

function _getUserLocation (map) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

            map.setCenter(pos);
        }, function() {
            console.log('navigation request blocked');
        });
    }
}

function _setIndex(data, inputId) {
    let dataIndex = data.address_components
                        .filter(function (comp) {
                            return comp.types && comp.types[0] == 'postal_code'
                        });

    if (dataIndex.length) {
        let input = document.querySelector(inputId);

        input.value = dataIndex[0].short_name;
        hideModal();
    } else {

    }

}
