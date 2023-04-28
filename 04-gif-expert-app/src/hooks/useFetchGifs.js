import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const gifsToState = async ()=>{
        let gifs =await getGif(category); 
        setGifs(gifs);
        setIsLoading(false);
    }

    useEffect( () => {
        gifsToState();
    }, [ ] );

    return {
        images: gifs,
        isLoading
    }
}