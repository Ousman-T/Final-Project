import { useState } from "react";

function NewOrderPage() {
    const [newTodo, setNewTodo] = useState({
      todoName: "",
      todoDetails: "",
      done: false
    })

    const handleChange = (evt) => {
        setNewTodo({...newTodo, [evt.target.name]: evt.target.value, error: ''})
    }

    const handleSubmit = async (e) => {
        
        handleChange()
    };
    return(
    <div>
        <h1>Create a new ToDo</h1>
        <form  autoComplete="off" action="/orders/new" method="POST" onSubmit={handleSubmit}>
            ToDo Name:<input type="text" name="todoName"/>
            <br />
            ToDo Details:<input type="text" name="todoDetails"/>
            <br />
            Done?<input type="checkbox" name="done"/>
            <br />
            <button type="submit" onSubmit={handleSubmit}>Create To Do</button>

        </form>
    </div>
        )
    
}


export default NewOrderPage;