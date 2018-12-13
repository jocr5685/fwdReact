import React, { Component } from 'react';
import firebase from './firebase.js';
import App from './App.js';
/*import InputForm from './inputForm.js';*/
import './displayGrid.css';


export default class DisplayGrid extends Component{

	constructor(){
		super();
		this.state={
			productArray:[]
		}
	}

	componentDidMount(){
		const itemsRef = firebase.database().ref('items');
		itemsRef.on('value',(snapshot) =>{
			let items = snapshot.val();
			let newArray = [];
			for(let item in items){
				newArray.push({
					id:item,
					product: items[item].product,
					description: items[item].description,
					price: items[item].price
				});
			}
			this.setState({
				productArray:newArray
			});
		});
	}

	removeItem(itemId){
		const productRef = firebase.database().ref(`/items/${itemId}`);
		productRef.remove();
		alert("Item Purchased!");
	}

	render(){
		return(
		  <div className="wrapper">
		    <ul className='list2'>
		      {this.state.productArray.map((item) => {
		        return (
		          <li key={item.id}>
		            <h3>{item.product}</h3>
		            <p>{item.description}</p>
		            <p>{item.price}</p>
		           	<button className='button2' onClick={() => this.removeItem(item.id)}>Purchase Item</button>
		          </li>
		        )
		      })}
		    </ul>
		  </div>
		);
	}
}


