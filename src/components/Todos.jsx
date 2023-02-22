import { useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

const Todos = () => {
    const [todos, setTodos] = useState([])

    const handleDelete = id => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }

    const addTodo = (newTodo) => {
        setTodos(prevTodos => [...prevTodos, newTodo]);
    }

    const handleComplete = id => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
        })
    }
    
    return ( 
        <>
            <AddTodo
                addTodo={addTodo}
            />
            <div className="pt-10 text-3xl">
                {todos?.map(todo => (
                    <Todo 
                        {...todo} 
                        key={todo.id} 
                        handleDelete={handleDelete}
                        addTodo={addTodo}
                        handleComplete={handleComplete}
                    />
                ))}
            </div>
        </>
    );
}
 
export default Todos;