import React from 'react';
import CardPizza from './CardPizza';
import napolitana from '../assets/img/napolitana.jpeg';
import espanola from '../assets/img/espanola.png';
import pepperoni from '../assets/img/pepperoni.jpg';

const Home = () => {
  return (
    <div className='card-container'>
      <CardPizza 
        name="Napolitana" 
        price={5950} 
        ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
        imagen={napolitana} // CAMBIÉ "img" POR "imagen" PORQUE AL PARECER ERA PALABRA RESERVADA, O NO SÉ, PERO DABA ERROR
      />
      <CardPizza 
        name="Española" 
        price={6950} 
        ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
        imagen={espanola}
      />
      <CardPizza 
        name="Pepperoni" 
        price={6950} 
        ingredients={["mozzarella", "pepperoni", "orégano"]}
        imagen={pepperoni}
      />
    </div>
  );
};

export default Home;