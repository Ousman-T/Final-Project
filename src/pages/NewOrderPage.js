

function NewOrderPage() {
    return(
    <div>
        <h1>Create a new ToDo</h1>
        <form action="/orders/new" method="POST">
            ToDo Name:<input type="text" name="ToDo Name"/>
            <br />
            ToDo Details:<input type="text" name="ToDo Details"/>
            <br />
            Done?<input type="checkbox" name="Done?"/>
            <br />
            <input type="submit" value='Create To Do'/>

        </form>
    </div>
        )
    
}


export default NewOrderPage;