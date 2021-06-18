import React from 'react';
import './navbar.css';
export default class Navbar extends React.Component {
  render()
  {
    return (
      <div className="navbar">
        <div className="links-container">
          <a href="#home">Strona główna</a>
          <a href="#aboutUs">O nas</a>
          <a href="#shop">Sklep</a>
          <button onClick={this.props.changeCartVisibility}></button>
          <p id="amount">{this.props.amount}</p>
        </div>
      </div>
    );
  }
}