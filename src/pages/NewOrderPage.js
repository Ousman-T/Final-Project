import { useState } from "react";

function NewOrderPage(user) {
    const [newTodo, setNewTodo] = useState({
      todoName: "",
      todoDetails: "",
      done: false
    })

    

    const handleChange = (evt) => {
        setNewTodo({...newTodo, [evt.target.name]: evt.target.value, error: ''})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log(newTodo);

            const newTodo = {
                todoName: newTodo.todoName,
                todoDetails: newTodo.todoDetails,
                done: newTodo.done,
                userName: user.name
        } 

    } catch(error) {
        setNewTodo({...newTodo, error: "Problem Saving Todo"})
    }};
    return(
    <div>
        <h1>Create a new ToDo</h1>
        <form  autoComplete="off" action="/orders/new" method="POST" onSubmit={handleSubmit}>
            ToDo Name:<input type="text" name="todoName" onChange={handleChange}/>
            <br />
            ToDo Details:<input type="text" name="todoDetails" onChange={handleChange}/>
            <br />
            Done?<input type="checkbox" name="done" onChange={handleChange}/>
            <br />
            <button type="submit" onSubmit={handleSubmit}>Create To Do</button>

        </form>
    </div>
        )
    }    
}



export default NewOrderPage;