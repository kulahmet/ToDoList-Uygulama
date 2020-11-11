const addItem = function (e) {
  if(e.key === 'Enter' || e.type === 'click'){

    if(document.getElementById('item_name').value.trim() === "") {
      alert('enter a value')
    } else {
      const listItem = document.createElement('li');
      listItem.innerHTML = document.getElementById('item_name').value + ' - ';
      
      const removeButton = document.createElement('span');
      removeButton.innerHTML = '(remove)';
      removeButton.style.color = 'red';
      removeButton.addEventListener('click', removeItem);
      listItem.appendChild(removeButton);

      document.getElementById('task_list').appendChild(listItem);

      document.getElementById('item_name').value = "";
    }
  }
}

const removeItem = function (e) {
  document.getElementById('task_list').removeChild(e.target.parentElement);
}

// document.getElementById('btn_add').onclick = addItem;

document.getElementById('btn_add').addEventListener('click', addItem);
document.getElementById('item_name').addEventListener('keypress', addItem);

for (i of document.getElementsByClassName('btn-remove')) {
  i.addEventListener('click', removeItem);
}

