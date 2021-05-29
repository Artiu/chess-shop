import React from 'react';
import './shop.css';
import Product from '../product/Product';
export default class Shop extends React.Component
{
    render(){
        const products = [{
            id:'1',
            name:'Szachownica',
            price:'100',
            description:'Najwyższej jakości szachownica stworzona z myślą o profesjonalnej grze turniejowej',
            photo:'szachownica.png'
        },
        {
            id:'2',
            name:'Zegar szachowy',
            price:'300',
            description:'Najwyższej jakości zegar z myślą o profesjonalnym zastosowaniu na turniejach',
            photo:'zegar.png'
        },
        {
            id:'3',
            name:'Zegar szachowy',
            price:'300',
            description:'Najwyższej jakości zegar z myślą o profesjonalnym zastosowaniu na turniejach',
            photo:'zegar.png'
        },
        {
            id:'2',
            name:'Zegar szachowy',
            price:'300',
            description:'Najwyższej jakości zegar z myślą o profesjonalnym zastosowaniu na turniejach',
            photo:'zegar.png'
        },
        {
            id:'2',
            name:'Zegar szachowy',
            price:'300',
            description:'Najwyższej jakości zegar z myślą o profesjonalnym zastosowaniu na turniejach',
            photo:'zegar.png'
        }
        ];
        return(
                <div className='shop'>
                    <h1>Nasz sklep</h1>
                    {products.map(product => 
                        <Product name={product.name} price={product.price} description={product.description} photo={product.photo}/>
                    )}
                </div>
        );
    }
};