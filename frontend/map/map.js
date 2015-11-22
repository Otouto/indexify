'use strict'

import './map.styl';
import { showModal } from '../modal/modal';


export function initMap(elId) {
    let elem = document.querySelector(elId),
        map = new google.maps.Map(document.querySelector('.in-modal-map-container'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 10
    });


    elem.addEventListener('click', function (e) {
        showModal();
        google.maps.event.trigger(map, 'resize');
    }, false);
};
