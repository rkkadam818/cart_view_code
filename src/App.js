import React, { Component, Fragment } from 'react';
import Cart from "./Cart";

export default class App extends Component{
	state = {
		products: [
			{id: 1, name:'Product 1', qty: 1, rate: 100},
			{id: 2, name:'Product 2', qty: 1, rate: 200},
			{id: 3, name:'Product 3', qty: 1, rate: 50},
			{id: 4, name:'Product 4', qty: 1, rate: 10},
			{id: 5, name:'Product 5', qty: 1, rate: 20},
			{id: 6, name:'Product 6', qty: 1, rate: 10}
		]
	}

	handleQtyAction = (product,action) => {
		const products = this.state.products;
		const index = products.indexOf(product);
		if('plus'===action) {
			products[index].qty++;
		}else{
			products[index].qty--;
		}
		this.setState({ products });
	}

	handleDelete = (item_id) => {
		const products = this.state.products.filter(product => product.id !== item_id);
		this.setState({ products });
	}
	render(){
		return(
			<Fragment>
				<div className="header">
					<h4 className="text-center">RK's Cart View</h4>
				</div>
				<br />
				<div className="container">
					<Cart products={this.state.products} onDelete={this.handleDelete} onQtyAction={this.handleQtyAction} />
				</div>
			</Fragment>
		);
	}
}