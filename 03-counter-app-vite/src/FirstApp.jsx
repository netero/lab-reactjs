import PropTypes from 'prop-types';

export const FirstApp = ( { title } ) => {
    return (
        <>
            <h1>{ title }</h1>
            <p>Subtitulo</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay titulo'
}