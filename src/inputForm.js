import React, { Component } from 'react';
import firebase from './firebase.js';
import App from './App.js';
import DisplayGrid from './displayGrid.js';
import './inputForm.css';

export default class InputForm extends Component{

	constructor(){
		super();
		this.state={
			product:'',
			description:'',
			price:''
		}
		this.userInput = this.userInput.bind(this);
		this.pushData = this.pushData.bind(this);
	}

	userInput(e){
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	pushData(e){
		e.preventDefault();
		const itemsRef = firebase.database().ref('items');
		const item = {
			product: this.state.product,
			description: this.state.description,
			price: this.state.price
		}
		itemsRef.push(item);
		this.setState({
			product:'',
			description:'',
			price:''
		});
		alert("Item Added!");
	}


	render(){
		return(
		// <div>
			<div className = 'form'>
				<header>
					<h1> Joe's List </h1>
				</header>

				<div className ='add'>
					<form onSubmit={this.pushData}>
					<ul className='firstlist'>
						<li><input type ="text" name="product" onChange={this.userInput} value={this.state.product} placeholder= "Product Name" /></li>
						<li><input type ="text" name="description" onChange={this.userInput} value={this.state.description} placeholder= "Product Description" /></li>
						<li><input type ="text" name="price" onChange={this.userInput} value={this.state.price} placeholder= "Price (USD)" /></li>
						<button className='button1'> Add Product </button>
					</ul>
					</form>
				</div>
			</div>
		// 	<div className = 'display'>
		// 	<DisplayGrid />
		// 	</div>
		// </div>
		);
	}

}

