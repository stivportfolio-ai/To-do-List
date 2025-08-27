const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
 }, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
 }]; //empty array

renderTodoList();

//synartisi gia na typono kati stin selida meso js generating html edo poli xrisimo
function renderTodoList ()
{
let todoListHTML = '';

for (let i =0; i < todoList.length; i++){
  const todoObject = todoList[i];
  //const name = todoObject.name;
  //const dueDate = todoObject.dueDate;  
  const{ name, dueDate } = todoObject;
  const html =  `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-todo-button" onclick="
      todoList.splice(${i}, 1);
      renderTodoList(); 
    ">Delete</button>
  `;
  todoListHTML += html;
}
document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}


function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value; //Etsi pairno tin timi appo to input

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({name: name, dueDate: dueDate});
  console.log(todoList);
  inputElement.value = ''; //gia na vazei sto iput keno kai an mhn fainetai pali to antikeimeno
  renderTodoList();
}

//Sinartisi gia na patao enter

function handleKeyDown(event){
  if(event.key === 'Enter'){
    addTodo();
  };
}