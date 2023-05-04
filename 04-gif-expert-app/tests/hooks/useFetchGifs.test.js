import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en hook usetFetchGifs',()=>{
    test('Estado inicial del hook',()=>{
        const { result } = renderHook(()=>useFetchGifs('TestText'));
        const {images, isLoading} = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('Debe retornar un arreglo de imagenes cuando esta cargado el hook', async ()=>{
        const { result } = renderHook(()=>useFetchGifs('One Punch'));
        
        await waitFor(
            ()=>expect(result.current.images.length).toBeGreaterThan(0)
        );

        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy
    });
})