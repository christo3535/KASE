import React from 'react';
import { Link } from 'react-router-dom';
import './card.css'

const Card = ({appartement}) => {
    return (
        <div className='Card'>
            <Link className='cartApartement' to={ `/appartements/${appartement.id}` }>
            {/* <div className='cart'> */}
              <img className={ 'appartementImg' } src = { appartement.cover } alt="photos des appartements à louer"/>
              <h2 className={"appartementTitle"}>{ appartement.title }</h2>
               {/* </div> */}
            </Link>
        </div>
    );
};

export default Card;