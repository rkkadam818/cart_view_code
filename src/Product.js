import React, {Component} from 'react';
import product_img from './product.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export default class Product extends Component {
	btnDisable = () => {
		if( 1 === this.props.item.qty ) {
			return true;
		}
		return false;
	}
	render() {
		var item = this.props.item;
		return (
			<tr>
				<td><img className="product_img" src={product_img} alt="Product" /></td>
				<td>{item.name}</td>
				<td>{item.qty}</td>
				<td>{item.rate}</td>
				<td>{item.rate*item.qty}</td>
				<td className="text-right">
					<button  className="btn btn-secondary" onClick={() => this.props.onQtyAction(item,'plus')}><FontAwesomeIcon icon={faPlusCircle} /></button>
					<button disabled={this.btnDisable()} className="btn btn-info minus_btn" onClick={() => this.props.onQtyAction(item,'minus')}><FontAwesomeIcon icon={faMinusCircle} /></button>
					<button className="btn btn-danger" onClick={() => this.props.onDelete(item.id) } ><FontAwesomeIcon icon={faTrashAlt} /></button>
				</td>
			</tr>
		);
	}
}
