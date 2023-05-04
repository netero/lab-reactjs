import { useState } from "react";
import PropTypes from 'prop-types';

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
        <form onSubmit={onSubmit} aria-label="form">
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />

        </form>
        
    )
}

AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired
}