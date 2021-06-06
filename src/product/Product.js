import React from 'react';
import './Product.css';
// import zegar from './zegar.png'
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
        return(
            <div className='product'>
                <h2>{this.props.name}</h2>
                {/* <img src={zegar} alt="zdjecie_produktu"></img> */}
                <span>{this.props.description}</span>
                <span>{this.props.price}</span>
                <button onClick={this.minusAmount}>-</button>
                <span>{this.state.amount}</span>
                <button onClick={this.addAmount}>+</button>
                <button onClick={this.addToCart}>Dodaj do koszyka</button>
            </div>
        );
    }
};