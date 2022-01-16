import "./index.css";

const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("form > input");

form.addEventListener("submit",event=>{
    event.preventDefault();
    const value = input.value;
    input.value = "";
    addTodo(value);
})

const todos = [
    {
        text:"i am a javascript TodoList",
        done:false
    },
    {
        text:"made by christ Colorado",
        done:true
    }
]

const displayTodo = ()=>{
    const todosNode = todos.map((todo,index)=>{
        return createTodoElement(todo, index);
    });
    ul.innerHTML="";
    ul.append(...todosNode);
}

const createTodoElement = (todo, index) => {
    const li = document.createElement("li");
    const buttonDelete = document.createElement("button");
    buttonDelete.innerHTML = "Supprimer";
    buttonDelete.addEventListener('click',event=>{
        event.stopPropagation();
        deleteTodo(index);
    });

    li.innerHTML = `
      <span class="todo ${todo.done ? "done" : ""}"></span>
      <p>${todo.text}</p>
    `;
    li.append(buttonDelete);
    li.addEventListener("cleck",event=>{
        toogleTodo(index);
    })
    return li;
};

  const addTodo = text=>{
      todos.push({
          text,
          done:false
      });
      displayTodo();
  }
  const deleteTodo = index=>{
      todos.splice(index, 1);
      displayTodo();
  }
  const toogleTodo = index =>{
      todo[index].done = !todo[index].done;
  }
   
  displayTodo();
