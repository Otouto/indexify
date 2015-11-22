'use strict'

import './modal.styl'

var modalEl = document.createElement('div'),
    modalPopupEl = document.createElement('div'),
    mapEl = document.createElement('div');

function closeClick (e) {
    if (e.target.className.indexOf('in-modal_show') > -1) {
        hideModal();
    }
}

function closeEscape (e) {
    if (e.keyCode == 27) {
        hideModal();
    }
}

function subscribeClose () {
    document.addEventListener('keydown', closeEscape, false);
    modalEl.addEventListener('click', closeClick, false);
}

function unsubscribeClose () {
    document.removeEventListener('keydown', closeEscape, false);
    modalEl.removeEventListener('click', closeClick, false);
}

function initModal() {

    modalEl.classList.add('in-modal');
    modalPopupEl.classList.add('in-modal-popup');
    mapEl.classList.add('in-modal-map-container');

    modalPopupEl.appendChild(mapEl);
    modalEl.appendChild(modalPopupEl);
    document.body.appendChild(modalEl);
};

function showModal () {
    modalEl.classList.add('in-modal_show');
    subscribeClose();
}

function hideModal() {
    modalEl.classList.remove('in-modal_show');
    unsubscribeClose();
}

export { initModal, showModal, hideModal };
