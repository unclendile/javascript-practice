const todoList = JSON.parse(localStorage.getItem('todoList')) || [
  {name:'watch movies', date:'2026-07-07'},
  {name:'watch movies', date:'2026-07-07'}
];

const outputElem = document.querySelector('.js-message');

function AddTodo(){
  const nameInputElem = document.querySelector('.js-input');
  const dateInputElem = document.querySelector('.js-date');

  const todoName = nameInputElem.value;
  const dueDate = dateInputElem.value;

  if(!(nameInputElem.value && dateInputElem.value)){
    
      document.querySelector('.count').innerHTML = 'No data provided';

  }
  else{
    todoList.push({name:todoName,date:dueDate});
    document.querySelector('.count').innerHTML = '';
  }

  localStorage.setItem('todoList',JSON.stringify(todoList));
  nameInputElem.value = '';
  dateInputElem.value = '';
  

  console.log(todoList)
  renderTodo();
}
renderTodo();

function renderTodo(){
  let todoListHTML = '';
  for(let i = 0; i < todoList.length; i++){
    const todo = todoList[i];
    const html = `
    
    <div>
      ${todo.name} 
    </div>
    <div>
      ${todo.date}
    </div>
    
      <button class="delete-btn" onclick="removeTodo(${i});document.querySelector('.count').innerHTML = '';">Delete</button>
    `;

    todoListHTML += html;

  }
  outputElem.innerHTML = todoListHTML;

}

function removeTodo(ind){
  todoList.splice(ind,1);
  renderTodo();
}
