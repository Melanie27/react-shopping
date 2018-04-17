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
              <li>
              {flower.name}
              <img src={flower.image} alt={flower.title}/>
              </li>
            </div>
          )
        }



			</section>
		);
	}

}

export default Flower;	