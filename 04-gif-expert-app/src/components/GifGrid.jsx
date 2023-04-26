import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({category}) => {
    
    const [gifs, setGifs] = useState([]);
    const gifsToState = async ()=>{
        setGifs(await getGif(category));
    }

    useEffect( () => {
        gifsToState();
    }, [ ] );

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">{gifs.map(gif=><GifGridItem key={gif.id} {...gif}/>)}</div>
            
        </>
    )
}