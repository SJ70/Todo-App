export default function checkBoxBlankSvgEl() {

    const checkBoxBlankSvgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    checkBoxBlankSvgEl.setAttribute('id', 'svg');
    checkBoxBlankSvgEl.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    checkBoxBlankSvgEl.setAttribute('height', '24');
    checkBoxBlankSvgEl.setAttribute('viewBox', '0 -960 960 960');
    checkBoxBlankSvgEl.setAttribute('width', '24');
    
    const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathEl.setAttribute('d', 'M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z');
    
    checkBoxBlankSvgEl.appendChild(pathEl);
    
    return checkBoxBlankSvgEl;
}