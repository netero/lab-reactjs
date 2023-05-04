import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en componente <AdCategory />', () => {
    test('Debe de cambiar la caja de texto',()=>{
        render( <AddCategory onAddCategory={(value)=>{ console.log(value)}}/> );
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: {value: 'TestText'} });

        expect(input.value).toBe('TestText');
        //screen.debug();
    });

    test('Debe llamar onAddCategory al submit', () => {
        const inputValue = 'TestText';

        const onAddCategory = jest.fn();

        render(<AddCategory onAddCategory={onAddCategory}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: {value: inputValue} });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onAddCategory).toHaveBeenCalledWith(inputValue);
    });
});