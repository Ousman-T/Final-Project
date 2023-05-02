import { checkToken } from "../utilities/users-service";
import { useState, useEffect } from "react";
import { getTodos } from "../utilities/users-api";
import { getRidOfTodo, updateTodo } from "../utilities/users-api";

function OrderHistoryPage({user}) {
  const [todos, setTodos] = useState([]);
  const [isDoneLoading, setIsDoneLoading] = useState(false)
  const [text, setText] = useState([]);
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
   console.log(response);
   window.location.reload();
  //  response.then (() => {
  //    console.log("hello");
  //    window.location.reload();
  //   })

  }
  async function update(id){
    const data = document.getElementById(id).value
    console.log(data);
    const response = await updateTodo({"_id": id, "todoDetails": data})
    console.log(response);
    console.log('updating');
    window.location.reload();
    // response.then (() => {
    //   window.location.reload();
    // });
  };
  const handleChange = event => {
    setText(event.target.value)
  };

  return (
    <div>
      <h1>View To Dos</h1>
      {isDoneLoading == true}{
        todos.map(todo => {
          return(
            <>
            <h3>{todo.todoName}</h3>
            <input 
            type="text" 
            // value={todo.todoDetails} 
            placeholder={todo.todoDetails} 
            id={todo._id}
            onChange={handleChange}></input>
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
