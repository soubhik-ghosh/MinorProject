

import React, { useState } from 'react';
import {Modal} from 'react-bootstrap'

export default function Pizza({ pizza }) {
  const [quantity, setQuantity] = useState(1); // Correct useState
  const [variant, setVariant] = useState("small"); // Correct useState
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{margin: '70px'}} className='shadow-lg p-3 mb-5 bg-white rounded'>

      <div onClick={handleShow}>
        <h1 >{pizza.name}</h1>
          <img 
            src={pizza.image} 
            className="img-fluid" 
            style={{ 
              height: '200px',
              width: '200px',
            }}
          alt={pizza.name} 
        />
      </div>

      <div>
        
        
        <div className="flex-container">
      
          <div className="w-100 m-1">
            <p>Variants</p>
            <select className='form-control' value={variant} onChange={(e) => setVariant(e.target.value)}>
              {pizza.varients.map((varient) => {
                return (
                  <option key={varient} value={varient}>
                    {varient}
                  </option>
                );
              })}
            </select>
          </div>

   
          <div className="w-100 m-1">
            <p>Quantity</p>
            <select className='form-control' value={quantity} onChange={(e) => setQuantity(e.target.value)}>
              {[...Array(10).keys()].map((_, i) => {
                return (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

  

        <div className="flex-container">

        

          <div className='m-1 w-100'>
            
            <h1 className='mt-1'>Price: {pizza.prices[0][variant] * quantity} Rs/-</h1>
          </div>

          <div className='m-1 w-100'>
            <button className="btn">ADD to CART</button>
          </div>
        </div>
      </div>


      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={pizza.image} className="img-fluid" style={{height:'400px ' , }}/>
          <p>{pizza.description}</p>
        </Modal.Body>          
        <Modal.Footer>
          <button className="btn" onClick={handleClose}>CLOSE</button>
        </Modal.Footer>
      </Modal>



    </div>
  );
}

/*
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'; // Fixed typo in Modal import

export default function Pizza({ pizza }) {
  const [quantity, setQuantity] = useState(1); // Corrected typo in "quantity"
  const [variant, setVariant] = useState("small"); // Corrected typo in "variant"
  const [show, setShow] = useState(false); // Corrected modal visibility state

  const handleClose = () => setShow(false); // Corrected modal close handler
  const handleShow = () => setShow(true); // Corrected modal show handler

  return (
    <div style={{ margin: '70px' }} className="shadow-lg p-3 mb-5 bg-white rounded">
      <div>
        <h1>{pizza.name}</h1>
        <img
          src={pizza.image}
          className="img-fluid"
          style={{
            height: '200px',
            width: '200px',
          }}
          alt={pizza.name}
        />

        <div className="flex-container">
      
          <div className="w-100 m-1">
            <p>Variants</p>
            <select
              className="form-control"
              value={variant}
              onChange={(e) => setVariant(e.target.value)}
            >
              {pizza.varients.map((varient) => (
                <option key={varient} value={varient}>
                  {varient}
                </option>
              ))}
            </select>
          </div>

          
          <div className="w-100 m-1">
            <p>Quantity</p>
            <select
              className="form-control"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))} // Fixed logical error (convert to number)
            >
              {[...Array(10).keys()].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        </div>

       
        <div className="flex-container">
          <div className="m-1 w-100">
            <h1 className="mt-1">
              Price: ₹{pizza.prices[0][variant] * quantity} Rs/-
            </h1>
          </div>

          <div className="m-1 w-100">
            <button className="btn btn-primary" onClick={handleShow}>
              ADD to CART
            </button>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CLOSE
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
  */
