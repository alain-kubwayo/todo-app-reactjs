import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const Todo = ({ id, name, completed, handleDelete, handleComplete }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = e => {
        setIsChecked(e.target.checked); 
        handleComplete(id);
    }
    
    return ( 
        <label className="flex justify-between gap-y-6">
            <div className="flex">
                <input 
                    type="checkbox" 
                    className="mr-2" 
                    name="isChecked"
                    onChange={handleChange}
                />
                <p className={completed ? 'line-through' : ''}>{ name }</p>
            </div>
            <button onClick={() => handleDelete(id)}>
                <FontAwesomeIcon icon={faTrash} className="text-red-500" />
            </button>
        </label>
        
    );
}
 
export default Todo;