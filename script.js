const addItem = function (e) {
  if(e.key === 'Enter' || e.type === 'click'){
    
    const listItem = document.createElement('li');
    listItem.innerHTML = document.getElementById('item_name').value;
    document.getElementById('task_list').appendChild(listItem);

    document.getElementById('item_name').value = "";
  } 
}

const removeItem = function (e) {
  console.log(e.target.innerHTML);
}

// document.getElementById('btn_add').onclick = addItem;

document.getElementById('btn_add').addEventListener('click', addItem);
document.getElementById('item_name').addEventListener('keypress', addItem);
document.getElementById('btn_remove').addEventListener('click', removeItem);
