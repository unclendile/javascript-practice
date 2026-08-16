const todoList = ['watch','bath'];

function renderTodoList(){
  let todolistHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const element = todoList[i];
    const html = `<p>${element} <button onclick="removeTodo(${i})">Delete</button></p>`
    todolistHTML +=html;
  }
  console.log(todolistHTML);
  const outputElem = document.querySelector('.js-message'); 
    outputElem.innerHTML = todolistHTML;
}
renderTodoList();

function addTodo(){
  const inputElem = document.querySelector('.js-input');

  const name = inputElem.value;
  
  if(name === ''){
    console.log('invalid')
  }else{
    todoList.push(name);
    console.log(todoList);
  }
 

  inputElem.value = '';
  renderTodoList();
}

function removeTodo(index){
  todoList.splice(index,1);
  console.log(todoList);
  renderTodoList();
}