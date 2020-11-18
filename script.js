const addItem = function (e) {
  if(e.key === 'Enter' || e.type === 'click'){

    if(document.getElementById('item_name').value.trim() === "") {
      alert('enter a value');
      document.getElementById('item_name').value = "";
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

const editItem = function (e) {
  const textItem = e.target.parentElement.getElementsByClassName('item-text')[0];
  const textInput = e.target.parentElement.getElementsByClassName('item-input')[0];
  const editGroupButtons = e.target.parentElement.getElementsByClassName('btn-group-edit');
  const saveGroupButtons = e.target.parentElement.getElementsByClassName('btn-group-save');

  textItem.hidden = true;
  textInput.hidden = false;

  for (i of editGroupButtons) {
    i.hidden = true;
  }

  for (i of saveGroupButtons) {
    i.hidden = false;
  }

  textInput.value = textItem.innerText;

  console.log(textInput);
}

// document.getElementById('btn_add').onclick = addItem;

document.getElementById('btn_add').addEventListener('click', addItem);
document.getElementById('item_name').addEventListener('keypress', addItem);

for (i of document.getElementsByClassName('btn-remove')) {
  i.addEventListener('click', removeItem);
}

for (i of document.getElementsByClassName('btn-edit')) {
  i.addEventListener('click', editItem);
}

