import { useState } from "react"

export const AddCategory = ({ onAddCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event)=>{
        setInputValue(event.target.value);
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        onAddCategory(inputValue );
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />

        </form>
        
    )
}