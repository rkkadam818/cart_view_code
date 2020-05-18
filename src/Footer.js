import React, { Component, Fragment } from 'react';

export default class Footer extends Component {
	render() {
		var subTotal = this.props.sub_total;
		var shipping = 50;
		return <Fragment>
			<tr>
				<td><i className="fa fa-address-book" aria-hidden="true"></i></td>
				<td></td>
				<td></td>
				<td></td>
				<td>Sub-Total</td>
				<td className="text-right"><strong>{subTotal}</strong></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td>Shipping</td>
				<td className="text-right"><strong>{shipping}</strong></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td><strong>Total</strong></td>
				<td className="text-right"><strong>{subTotal+shipping}</strong></td>
			</tr>
		</Fragment>
	}
}
