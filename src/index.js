import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar/Navbar';
import HomePage from './home-page/HomePage';
import AboutUs from './about-us/AboutUs';
import Shop from './shop/shop';
import Footer from './footer/Footer';

class App extends React.Component
{
  render()
  {
    return(
      <>
        <Navbar />
        <HomePage />
        <AboutUs />
        <Shop />
        <Footer />
      </>
    );
  }
};

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
