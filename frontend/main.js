'use strict';

//temp requires
require('./index.html');
require('./marker.svg');

import { initMap } from './map/map';
import { initModal } from './modal/modal';

let inited = false;

exports.init = function (btnId, inputId) {
    if (!inited) {
        initModal();
        initMap(btnId, inputId);
    }
};
