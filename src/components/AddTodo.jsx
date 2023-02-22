import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { nanoid } from 'nanoid';


const AddTodo = ({ addTodo }) => {
    const [todo, setTodo] = useState({
        id: '',
        name: '',
        completed: false
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setTodo({
            id: nanoid(),
            [name]: value,
            completed: false,
        })
    }

    const handleAdd = () => {
        if(todo.name !== ''){
            addTodo(todo);
            setTodo(prevTodo => ({
                ...prevTodo,
                name: ''
            }))
        }
    }

    return ( 
        <div className="relative">
            <input 
                type="text" 
                placeholder="Add todo..." 
                className="w-full shadow-xl py-3 px-1.5 outline-none border broder-gray-100"
                name="name"
                value={todo.name}
                onChange={handleChange}
            />
            <button className="absolute right-[1%] top-1/4" onClick={handleAdd}>
                <FontAwesomeIcon icon={faCirclePlus} className="text-2xl text-green-600" />
            </button>
        </div>
     );
}
 
export default AddTodo;