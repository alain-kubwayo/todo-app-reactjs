import { useState } from "react";
import CreateTodo from "./CreateTodo";
import Todo from "./SingleTodo";

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
            <CreateTodo
                addTodo={addTodo}
            />
            <div className="pt-10 text-3xl">
                {
                    todos.length > 0 ? (
                        todos.map(todo => (
                            <Todo 
                                {...todo} 
                                key={todo.id} 
                                handleDelete={handleDelete}
                                addTodo={addTodo}
                                handleComplete={handleComplete}
                            />
                        ))
                    ) : (
                        <div className="text-sm font-bold text-center text-gray-500/60">You are all caught up 🏆</div>
                    )
                }
            </div>
        </>
    );
}
 
export default Todos;