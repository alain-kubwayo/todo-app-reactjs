import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const SingleTodo = ({ id, name, completed, handleDelete, handleComplete }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = e => {
        setIsChecked(e.target.checked); 
        handleComplete(id);
    }
    
    return ( 
        <label className="flex justify-between px-1 border-b border-gray-500/20 md:px-2 gap-y-6">
            <div className="flex items-center">
                <input 
                    type="checkbox" 
                    className="mr-2" 
                    name="isChecked"
                    onChange={handleChange}
                />
                <p className={` font-semibold text-lg text-gray-500/70 ${completed ? 'line-through' : ''}`}>{ name }</p>
            </div>
            <button onClick={() => handleDelete(id)}>
                <FontAwesomeIcon 
                    icon={faTrash} 
                    className="text-xl text-red-500" 
                />
            </button>
        </label>
        
    );
}
 
export default SingleTodo;