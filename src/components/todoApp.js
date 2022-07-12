import { useState } from "react";

export default function TodoApp(){
      
    const [title, setTitle] = useState("Hola");
    const [todos, setTodos] = useState([]);

    function handleClick(e){
        e.preventDefault(); {/*como estoy mandando llamar un formulario atraves del input de submit, trata de enviarse ese formulario por eso es que se actualiza la aplicacion, y con este e.prevent anulo el comportamiento natvio de este input */}
        /* setTitle("Conejo"); */

    }

    function handleChange(event){
        const value = event.target.value;

        setTitle(value);
    }

    function handleSubmit(e){
        e.preventDefault();

        const newTodo = {
            id: crypto.createObjectID(),
            title: title,
            completed: false

        };

        const temp = [...todos];
        temp.unshift(newTodo);
        setTodos(temp);
    }   

     
    return (
        <div className="todoContainer">
            <form className="todoCreateForm" onSubmit={handleSubmit}>
                <input onChange={handleChange} className="todoInput" value={title} />
                <input 
                    onClick={handleSubmit} 
                    type="submit" 
                    value="create todo" 
                    className="buttonCreate" 
                />
                
            </form>

            <div className="todosContainer">
                {todos.map((item) => (
                    <div key={item.id}>{item.title}</div>
                ))}
            </div>
        </div>
    );

}