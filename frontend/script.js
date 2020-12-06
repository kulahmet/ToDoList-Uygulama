import {addItem, addDbItem, removeItem, editItem, cancelItem, saveItem, completeItem, getResponse} from './add-item.js'

document.getElementById('btn_add').addEventListener('click', addItem);
document.getElementById('item_name').addEventListener('keypress', addItem);

for (let i of document.getElementsByClassName('btn-remove')) {
  i.addEventListener('click', removeItem);
}

for (let i of document.getElementsByClassName('btn-edit')) {
  i.addEventListener('click', editItem);
}

for (let i of document.getElementsByClassName('btn-cancel')) {
  i.addEventListener('click', cancelItem);
}

for (let i of document.getElementsByClassName('btn-save')) {
  i.addEventListener('click', saveItem);
}

for (let i of document.getElementsByClassName('item-text')) {
  i.addEventListener('click', completeItem);
}

getResponse();
