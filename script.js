import getCheckBoxSvgEl from './js/svgElements/checkBox.js';
import getCheckBoxBlankSvgEl from './js/svgElements/checkBoxBlank.js';
import getDeleteSvgEl from './js/svgElements/delete.js';
import getEditSvgEl from './js/svgElements/edit.js';

const createBtn = document.getElementById("create-btn");
const itemsEl = document.getElementById("items");

let itemList = [];

createBtn.addEventListener('click', addNewItem);

function addNewItem() {
    const item = createNewItem();
    itemList.unshift(item);
    const itemEl = createItemEl(item);
    itemsEl.prepend(itemEl);
}

function createNewItem() {
    return {
        id: crypto.randomUUID(),
        text: '',
        complete: false
    }
}

function createItemEl(item) {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.classList.add(item.complete ? 'complete' : 'incomplete');

    const checkBoxButtonEl = document.createElement('button');
    const checkBoxSvgEl = getCheckBoxSvgElByComplete(item.complete);
    checkBoxButtonEl.append(checkBoxSvgEl);
    checkBoxButtonEl.addEventListener('click', () => switchComplete(item, itemEl, checkBoxButtonEl));

    const inputEl = document.createElement('input');
    inputEl.type = 'text';
    inputEl.value = item.text;

    const editButtonEl = document.createElement('button');
    editButtonEl.append(getEditSvgEl());

    const deleteButtonEl = document.createElement('button');
    deleteButtonEl.append(getDeleteSvgEl());

    itemEl.append(checkBoxButtonEl);
    itemEl.append(inputEl);
    itemEl.append(editButtonEl);
    itemEl.append(deleteButtonEl);

    return itemEl;
}

function switchComplete(item, itemEl, checkBoxButtonEl) {
    item.complete = !item.complete;
    // console.log(item.complete);

    const classFrom = item.complete ? 'incomplete' : 'complete';
    const classTo = item.complete ? 'complete' : 'incomplete';
    itemEl.classList.replace(classFrom, classTo);

    const prevSvgEl = Array.from(checkBoxButtonEl.children)[0];
    checkBoxButtonEl.replaceChild(getCheckBoxSvgElByComplete(item.complete), prevSvgEl);
}

function getCheckBoxSvgElByComplete(complete) {
    return complete ? getCheckBoxSvgEl() : getCheckBoxBlankSvgEl()
}