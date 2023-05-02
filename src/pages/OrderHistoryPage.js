import { checkToken } from "../utilities/users-service";
import { useState, useEffect } from "react";
import { getTodos } from "../utilities/users-api";
import { getRidOfTodo, updateTodo } from "../utilities/users-api";

function OrderHistoryPage({user}) {
  const [todos, setTodos] = useState([]);
  const [isDoneLoading, setIsDoneLoading] = useState(false)
  async function getUsersTodos(){
    try{
      return await getTodos({"name":user.name})
    } catch(errors){
      console.log(errors);
    }
  } 
  useEffect(function () {
    async function fetchTodo(){
      const res = await getUsersTodos()
      setTodos(res);
      setIsDoneLoading(true);
      console.log(res);
    }
    fetchTodo();
  }, []);

  const handleCheckToken = async () => {
    const expDate = await checkToken();
    console.log(expDate);
  };
  async function deleteTodo(id){
   const response = await getRidOfTodo({"_id":id})
   response.then (() => {
     console.log("hello");
     window.location.reload();
    })

  }
  async function update(id){
    const data = document.getElementById(id).value
    const response = await updateTodo({"_id": id, "text": data})
    response.then (() => {
      console.log('updating');
      window.location.reload();
    });
  };

  return (
    <div>
      <h1>View To Dos</h1>
      {isDoneLoading == true}{
        todos.map(todo => {
          return(
            <>
            <h3>{todo.todoName}</h3>
            <input type="text" value={todo.todoDetails} placeholder={todo.todoDetails} id={todo._id}></input>
            <p>{todo.done}</p>
            <button onClick={() => {update(todo._id)}}>Edit</button>
            <button onClick={() => {deleteTodo(todo._id)}}>Delete</button>
            </>
          )
        })}
      
      
      <button onClick={handleCheckToken}>
        Check When My Login Token Expires
      </button>
    </div>
  );
}

export default OrderHistoryPage;
