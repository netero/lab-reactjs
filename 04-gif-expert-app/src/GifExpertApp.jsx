import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Goku'])

    const onAddCategory = (category)=>{
        if(category.trim().length<=1)return;
        if(categories.includes(category)) return;
        setCategories([category, ...categories ]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onAddCategory={onAddCategory}/>
            
            {categories.map(category => (
                <GifGrid 
                    key={category} 
                    category={category}/>
                )
            )}
        </>
    )
}