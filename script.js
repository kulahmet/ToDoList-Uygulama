const addItem = function (e) {
  if((e.type === 'keypress' && e.key === 'Enter') || e.type === 'click'){
    console.log(e)
  } 
}

const removeItem = function (e) {
  console.log(e.target.innerHTML);
}

// document.getElementById('btn_add').onclick = addItem;

document.getElementById('btn_add').addEventListener('click', addItem);
document.getElementById('item_name').addEventListener('keypress', addItem);
document.getElementById('btn_remove').addEventListener('click', removeItem);
