import {addItem, removeItem, editItem, cancelItem, saveItem, completeItem} from './add-item.js'

document.getElementById('btn_add').addEventListener('click', addItem);
document.getElementById('item_name').addEventListener('keypress', addItem);

for (i of document.getElementsByClassName('btn-remove')) {
  i.addEventListener('click', removeItem);
}

for (i of document.getElementsByClassName('btn-edit')) {
  i.addEventListener('click', editItem);
}

for (i of document.getElementsByClassName('btn-cancel')) {
  i.addEventListener('click', cancelItem);
}

for (i of document.getElementsByClassName('btn-save')) {
  i.addEventListener('click', saveItem);
}

for (i of document.getElementsByClassName('item-text')) {
  i.addEventListener('click', completeItem);
}