import React from 'react';
import { Link } from 'react-router-dom';
import './error.css'


const Error = () => {
    return (
        <div className='Error'>
            <h1 className='error-title'>404</h1>
            <h2>Oups!La page que vous demandez n'existe pas!</h2>
            <Link to='/home'className='backLink'>Retournez sur la page d'accueil!</Link>
        </div>
    );
};

export default Error;