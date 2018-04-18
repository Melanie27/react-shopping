import React, { Component } from 'react';
import flowerData from './../data/flowers';

class Flower extends Component {

	constructor(props) {
		super(props);
		this.state = { flowers: flowerData };
	}

	render() {
		return (
			<section className="flower">
			
			{
          this.state.flowers.map( (flower, index) => 
            
            <div key={index} >
              
              
              <img className="img-responsive" src={flower.image} alt={flower.title}/>
              <h2>{flower.name}</h2>
				<h3>Price: ${flower.price}</h3>             
            </div>
          )
        }



			</section>
		);
	}

}

export default Flower;	