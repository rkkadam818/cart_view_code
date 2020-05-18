import React, {Component} from 'react';
import Product from "./Product";
import Footer from "./Footer";

export default class Cart extends Component {
	render() {
		const {
			products,
			onDelete,
			onQtyAction
		} = this.props;
		var subTotal = products.reduce( function(amount,product){ return amount + (product.rate * product.qty); }, 0);
		return (
			<div className="row">
				<div className="col-md-12">
					<div className="table-responsive">
						<table className="table table-striped">
							<thead>
							<tr>
								<th></th>
								<th>Product Name</th>
								<th>Quantity</th>
								<th>Rate</th>
								<th>Amount</th>
								<th></th>
							</tr>
							</thead>
							<tbody>
								{products.map(product => (
									<Product key={product.id} item={product} onDelete={onDelete} onQtyAction={onQtyAction} />
								))}
								<Footer sub_total={subTotal}/>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}
