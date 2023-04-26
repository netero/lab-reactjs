import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en CounterApp',()=>{
    const initialValue=100;

    test('Debe hacer match con el snapshot',()=>{
        const {container} = render(<CounterApp value={initialValue}/>);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar el valor inicial de 100', ()=>{
        
        render(<CounterApp value={initialValue}/>);
        expect(screen.getByText(initialValue)).toBeTruthy();

    });

    test('Incrementar +1', ()=>{
        render(<CounterApp value={initialValue}/>);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText(initialValue+1)).toBeTruthy();
    });

    test('Decrementar -1', ()=>{
        render(<CounterApp value={initialValue}/>);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText(initialValue-1)).toBeTruthy();
    });

    test('Resetear', ()=>{
        render(<CounterApp value={initialValue}/>);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
        expect(screen.getByText(initialValue)).toBeTruthy();
    });
});