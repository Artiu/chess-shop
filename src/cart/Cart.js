import React from "react";
import './cart.css';

export default class Cart extends React.Component {
    sumAll = () => {
        let sum=0;
        this.props.cart.forEach(el=>{
            sum+=el.amount*el.price
        });
        return sum;
    }
    render()
    {
        if(this.props.visibility)
        {
            if(this.props.cart.length>0)
            {
                return(
                    <div id="shopCart">
                        <h2>Twój koszyk</h2>
                        <button className="turnOff" onClick={this.props.changeCartVisibility}>x</button>
                        <ol>
                            {this.props.cart.map(product=>
                                <li key={String(product.id)}>
                                    <div>
                                        <img src={product.photo} alt="produkt"></img>
                                        <p className="name">{product.name}</p> 
                                    </div>
                                    <div className="right">
                                        <div className="amountContainer">
                                            <button  onClick={()=>this.props.changeAmount(product.id,"minus")}>-</button>
                                            <p className="amount">{product.amount}</p>
                                            <button onClick={()=>this.props.changeAmount(product.id,"plus")}>+</button>
                                        </div>
                                        <p className="price">{product.price*product.amount}zł</p>
                                    </div>
                                </li>
                            )}
                        </ol>
                        <p>Łącznie: </p>
                        <p id="sum">{this.sumAll()}zł</p>
                        <button id="buy" onClick={this.props.buy}>Zamów</button>
                    </div>
                );
            }
            else
            {
                return(
                <div id="shopCart">
                    <h2>Twój koszyk jest pusty!</h2>
                    <button className="turnOff" onClick={this.props.changeCartVisibility}>x</button>
                </div>
                );
            }
        }
        else return null;
    }
}