import {addItem, addDbItem, removeItem, editItem, cancelItem, saveItem, completeItem} from './add-item.js'

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

const getResponse = async () => {
  try{
    const response =  await fetch('http://localhost:8080/api/todoitems');
    if(response.ok){
      let jsonResponse = await response.json();
      // console.log(jsonResponse);
      for(let i=0; i<jsonResponse.length; i++){
        addDbItem(jsonResponse[i])
      }
    }
  }
  catch(error){
    console.log(error);
  }
}

getResponse();
