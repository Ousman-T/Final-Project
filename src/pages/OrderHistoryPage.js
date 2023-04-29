import { checkToken } from "../utilities/users-service";
import { useState, useEffect } from "react";
import { getTodos } from "../utilities/todos-service";

function OrderHistoryPage({user}) {
  const [todos, setTodos] = useState([]);
  async function getUsersTodos(){
    try{
      return await getTodos({"name":user.name})
    } catch(errors){
      console.log(errors);
    }
  } 
  useEffect(() => {
    const res = getUsersTodos()
    setTodos(res);
  }, []);

  const handleCheckToken = async () => {
    const expDate = await checkToken();
    console.log(expDate);
  };

  return (
    <div>
      <h1>View To Dos</h1>
      <button onClick={handleCheckToken}>
        Check When My Login Token Expires
      </button>
    </div>
  );
}

export default OrderHistoryPage;
