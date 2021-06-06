import React from 'react';
import './Product.css';
export default class Product extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            amount: 0
        }
    }
    addAmount = () =>
    {
        this.setState((state) => ({
            amount: state.amount+1
        }));
    }
    minusAmount = () =>
    {
        if(this.state.amount>0)
        {
            this.setState((state) => ({
                amount: state.amount-1
            }));
        }
    }
    addToCart = () =>
    {
        this.setState(() => ({
            amount: 0
        }));
    }
    render(){
        const {name,photo,description,price} = this.props;
        return(
            <div className='product'>
                <h2>{name}</h2>
                <img src={photo} alt="zdjecie_produktu"></img>
                <p id="description">{description}</p>
                <p>Cena za sztukę: {price} zł</p>
                <div className='amount-container'>
                    <button onClick={this.minusAmount}>-</button>
                    <span>{this.state.amount}</span>
                    <button onClick={this.addAmount}>+</button>
                </div>
                <button onClick={this.addToCart}>Dodaj do koszyka</button>
            </div>
        );
    }
};