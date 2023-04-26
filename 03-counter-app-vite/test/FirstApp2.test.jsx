import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en FirstApp", ()=>{
    const title ='Hola soty Rafael!!';
    const subtitle='Soy un subtitulo!!';
    test('DEbe hacer match con el snapshpt',()=>{
      const {container} = render(<FirstApp title={title}/>)  ;
      expect(container).toMatchSnapshot();
    });
    test('Debe mostrar el mensaje "Hola soy Rafael!!"',()=>{
      render(<FirstApp title={title}/>);
      expect(screen.getByText(title)).toBeTruthy();
    })
    test('Debe mostrar el titulo en un h1',()=>{
      render(<FirstApp title={title}/>);
      expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title);
    });

    test('DEbe mostrar el subtitulo enviado por props',()=>{
      render(<FirstApp title={title} subtitle={subtitle}/>);
      expect(screen.getByText(subtitle)).toBeTruthy();
    });
});