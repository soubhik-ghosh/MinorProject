
import React from 'react';
import Pizza from '../components/pizza';  // Corrected import
import pizzas from '../pizzasdata';  
export default function Homescreen() {
  return (
    <div>
      <div className="row">
        {pizzas.map((pizza, index) => (
          <div className="col-md-4 p-3" key={index}>
            <Pizza pizza={pizza} />
          </div>
        ))}
      </div>
    </div>
  );
}
