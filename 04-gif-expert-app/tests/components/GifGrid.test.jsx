import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas componente <GifGrid/>', ()=>{
    const category = 'TestCategory';
    test('Debe mostrar el loading inicialmente', () =>{
        useFetchGifs.mockReturnValue({images:[],isLoading:true});

        render(<GifGrid category={category}/>);
        expect( screen.getByText('Cargando...'));
    });

    test('Debe de mostrar items', () => {
        const gifs = [
            {
                id: '123',
                title: '123',
                url: 'http://123.com/123.jpg'
            },
            {
                id: '456',
                title: '456',
                url: 'http://456.com/456.jpg'
            }
        ];
        useFetchGifs.mockReturnValue({images:gifs,isLoading:false});
        render(<GifGrid category={category}/>);
        expect( screen.getAllByRole('img').length ).toBe(2);
    });
});