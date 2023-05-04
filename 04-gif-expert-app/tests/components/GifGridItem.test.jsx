const { render, screen } = require("@testing-library/react");
const { GifGridItem } = require("../../src/components/GifGridItem");

describe('Pruebas en <GifItem />',()=>{
    const title ='Title';
    const url ='http://url.cl/';
    
    test('Debe hacer match con el snapshot',()=>{
        const { container } = render( <GifGridItem url={url} title={title}/>);
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render( <GifGridItem url={url} title={title}/>);
        //screen.debug();
        const { src, alt } = screen.getByRole('img');
        expect (src).toBe(url);
        expect (alt).toBe(title);
    });

    test('Debe de mostrar el titulo en el componente', () => {
        render( <GifGridItem url={url} title={title}/>);
        expect( screen.getByText( title )).toBeTruthy();
    });
});