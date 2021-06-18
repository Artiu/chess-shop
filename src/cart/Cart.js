import React from "react";
import './cart.css';

export default class Cart extends React.Component {
    render()
    {
        if(this.props.visibility)
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
                                    <button  onClick={()=>this.props.changeAmount(product.id,"minus")}>-</button>
                                    <p className="amount">{product.amount}</p>
                                    <button onClick={()=>this.props.changeAmount(product.id,"plus")}>+</button>
                                    <p className="price">{product.price*product.amount}zł</p>
                                </div>
                            </li>
                        )}
                    </ol>
                </div>
            );
        }
        else return null;
    }
}