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
    this.setState(prevState => ({
      cart: [...prevState.cart,product]
    }));
  }
  plusAmount = (id) =>
  {
    let cartTab = this.state.cart;
    cartTab = cartTab.forEach((el)=>{
      if(el.id===id) el.amount += 1;
    });
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
        <Cart visibility={this.state.cartVisible} cart={this.state.cart} changeCartVisibility={this.changeCartVisibility} />
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
