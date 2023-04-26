import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en FirstApp", ()=>{
    /*test('Debe de hacer match con el snapshot', ()=>{
        const title ='Holaaaa';
        const {container} = render(<FirstApp title={title}/>);
        expect(container).toMatchSnapshot();
    });*/

    test('DEbe mostrar el titulo en h1',()=>{
        const title = 'Hola soy Rafael';
        const {container, getByText, getByTestId} = render(<FirstApp title={title}/>);

        expect(getByText(title)).toBeTruthy();

        //const text=container.querySelector('h1').innerHTML;
        //expect(text).toContain(title);

        expect(getByTestId('test-title').innerHTML).toBe(title);
    });

    test('Debe mostrar el subtitle enviado por props',()=>{
        const title = 'Hola soy Rafael';
        const subtitle = 'Soy un subtitulo'
        const {getByText} = render(
            <FirstApp title={title} subtitle={subtitle}/>
        );

        expect(getByText(subtitle)).toBeTruthy();

    })
});