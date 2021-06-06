import React from 'react';
import './shop.css';
import Product from '../product/Product';
export default class Shop extends React.Component
{
    render (){
        const products = [{
            id:'1',
            name:'Szachownica',
            price:'100',
            description:'Najwyższej jakości szachownica stworzona z myślą o profesjonalnej grze turniejowej',
            photo:'zegar'
        },
        {
            id:'2',
            name:'Zegar szachowy',
            price:'300',
            description:'Najwyższej jakości zegar z myślą o profesjonalnym zastosowaniu na turniejach',
            photo:'zegar'
        },
        {
            id:'3',
            name:'Zegar szachowy',
            price:'300',
            description:'Najwyższej jakości zegar z myślą o profesjonalnym zastosowaniu na turniejach',
            photo:'zegar'
        },
        {
            id:'4',
            name:'Zegar szachowy',
            price:'300',
            description:'Najwyższej jakości zegar z myślą o profesjonalnym zastosowaniu na turniejach',
            photo:'zegar'
        },
        {
            id:'5',
            name:'Zegar szachowy',
            price:'300',
            description:'Najwyższej jakości zegar z myślą o profesjonalnym zastosowaniu na turniejach',
            photo:'zegar'
        }
        ];
        return(
                <div className='shop' id="shop">
                    <h1>Nasz sklep</h1>
                    {products.map(product => 
                        <Product key={product.id} name={product.name} price={product.price} description={product.description} photo={product.photo}/>
                    )}
                </div>
        );
    }
};