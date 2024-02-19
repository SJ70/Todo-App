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
    checkBoxButtonEl.append(item.complete ? getCheckBoxSvgEl() : getCheckBoxBlankSvgEl());

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