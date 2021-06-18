import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar/Navbar';
import HomePage from './home-page/HomePage';
import AboutUs from './about-us/AboutUs';
import Shop from './shop/shop';
import Footer from './footer/Footer';
import Cart from './cart/Cart';

class App extends React.Component
{
  state = {
    cart : [],
    cartVisible: false
  }
  addToCart = (product) =>
  {
    const cart = this.state.cart;
    let addNew = true;
    for(let i in cart)
    {
      if(product.id === cart[i].id){
        cart[i].amount += product.amount;
        addNew = false;
        break;
      }
    }
    if(addNew)
    {
      this.setState(prevState => ({
        cart: [...prevState.cart,product]
      }));
    }
    else
    {
      this.setState(() => ({
        cart: cart
      }));
    }
  }
  changeAmount = (id,operation) =>
  {
    let cartTab = this.state.cart;
    for(let i in cartTab)
    {
      if(id === cartTab[i].id){
        if(operation==="plus")
        {
          cartTab[i].amount += 1;
        }
        else
        {
          if(cartTab[i].amount > 1) cartTab[i].amount -= 1;
          else cartTab.splice(i,1);
        }
        break;
      }
    }
    this.setState(() => ({
      cart: cartTab
    }));
  }
  changeCartVisibility = () =>
  {
    const currentValue = this.state.cartVisible;
    this.setState(()=> ({
      cartVisible: !(currentValue)
    }));
  }
  render()
  {
    return(
      <>
        <Navbar changeCartVisibility={this.changeCartVisibility} amount = {this.state.cart.length}/>
        <Cart visibility={this.state.cartVisible} cart={this.state.cart} changeCartVisibility={this.changeCartVisibility} changeAmount={this.changeAmount}/>
        <HomePage />
        <AboutUs />
        <Shop addToCart = {this.addToCart}/>
        <Footer />
      </>
    );
  }
};

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
