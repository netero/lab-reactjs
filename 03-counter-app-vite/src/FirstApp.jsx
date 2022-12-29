function GetValues(){
    return 1+2;
}
const newMessage={
    message:'Hola mundo',
    title:'123'
};
export const FirstApp = () => {
    return (
        <>
            <h1>{ GetValues() }</h1>
            <p>Subtitulo</p>
        </>
    )
}