import React from 'react';
import './AboutUs.css';
import image from './check.png';
import image2 from './king.png'
export default class AboutUs extends React.Component
{
    render(){
        return(
            <div className='about-us'>
                <div className="box_1">
                    <img src={image} alt="check"></img>
                    <span>Jesteśmy firmą z tradycją utrzymującą się na rynku od ponad 30 lat. Zaufało nam ponad 30 000 klientów</span>
                    <div className="empty"></div>
                </div>
                <div className="empty"></div>
                <div className="box_2">
                    <img src={image2} alt="krol"></img>
                    <span>Jesteśmy kompletnymi dominatorami na rynku szachowym. Sprzedajemy szachownice, zegary i książki.</span>
                    <div className="empty"></div>
                </div>
                <div className="empty"></div>
            </div>
        );
    }
};