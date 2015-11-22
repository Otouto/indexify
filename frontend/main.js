'use strict';

import { initMap } from './map/map';
import { initModal } from './modal/modal';

let inited = false;

exports.init = function (id) {
    if (!inited) {
        initModal();
        initMap(id);
    }
};
