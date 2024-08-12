import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


function CardPizza({ name, price, ingredients, imagen }) {
  
  const formattedPrice = price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });


  const ingredientsList = ingredients.join(', ');

  return (
    <Card style={{ width: '30rem' }}>
    <Card.Img variant="top" src={imagen} />
    <Card.Body>
        <Card.Title><h4>Pizza {name}</h4></Card.Title>
    </Card.Body>

    <ListGroup className="list-group-flush">
        <div className='ingredientes'>
            <ListGroup.Item>
                <p className='ingredientes-titulo'>Ingredientes:</p>
                <p className='ingredientes-texto'>🍕 {ingredientsList}</p>
            </ListGroup.Item>
        </div>

        <div className='precio'>
            <ListGroup.Item>
                <p>Precio: {formattedPrice}</p>

            <div className='vermas-anadir'>
                <Button variant="outline-dark">👀 Ver más</Button>
                <Button variant="dark">🛒 Añadir</Button>
            </div>
                
            </ListGroup.Item>
        </div>        
    </ListGroup>
    </Card>
  );
}

export default CardPizza;