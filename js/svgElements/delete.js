export default function getDeleteSvgEl() {
    
    const deleteSvgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    deleteSvgEl.setAttribute('id', 'svg');
    deleteSvgEl.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    deleteSvgEl.setAttribute('height', '24');
    deleteSvgEl.setAttribute('viewBox', '0 -960 960 960');
    deleteSvgEl.setAttribute('width', '24');

    const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathEl.setAttribute('d', 'M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z');

    deleteSvgEl.appendChild(pathEl);

    return deleteSvgEl;
}