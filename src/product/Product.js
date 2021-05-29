import React from 'react';
import './Product.css';
export default class Product extends React.Component
{
    render(){
        return(
            <div className='product'>
                <h2>{this.props.name}</h2>
                <span>{this.props.description}</span>
                <span>{this.props.price}</span>
            </div>
        );
    }
};