import React from 'react';
import './HomePage.css';
import Product from '../product/Product';
import szachownica from '../product/images/szachownica.png';

export default class MainPage extends React.Component
{
    render()
    {
        const product = {
            id:'1',
            name:'Szachownica',
            price:'100',
            description:'Najwyższej jakości szachownica stworzona z myślą o profesjonalnej grze turniejowej',
            photo:szachownica
        }
        return(
            <div className="homePage" id="home">
                <h1>Produkt dnia</h1>
                <Product key={product.id} name={product.name} price={product.price} description={product.description} photo={product.photo}/>
            </div>
        );
    }
};