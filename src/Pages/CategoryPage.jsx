import React, { Component } from 'react';
import axios from 'axios';

//George
import { Stack, Button } from '@mui/material';
// import QtyComponents from './QtyComponents';

/* This is a higher order component that
 *  inject a special prop   to our component.
 */

import { useParams } from 'react-router-dom';
function withRouter(Component) {
	function ComponentWithRouter(props) {
		let params = useParams();
		return <Component {...props} params={params} />;
	}
	return ComponentWithRouter;
}

class CategoryPage extends Component {
	state = { products: [] };
	async componentDidMount() {
		const { data } = await axios.get(
			'https://e-shop-udacity-13.herokuapp.com/product/active?category=laptops',
		);
		// console.log(data);
		// let reqData = data.slice(0, 10);
		this.setState({ products: data });
		// console.log(this.props.params.id);
		// console.log(
		// 	this.props.productsCategory.filter(
		// 		(cat) => cat.id === +this.props.params.id,
		// 	)[0].name,
		// );
	}
	render() {
		return (
			<React.Fragment>
				{this.state.products.map((product) => {
					return (
						<Stack margin={'10px'} direction={'column'} key={product.id}>
							<div className='item'>
								<h1>{product.name.slice(0, 10)}</h1>
								<div>
									<span>Category :</span>
									{
										this.props.productsCategory.filter(
											(cat) => cat.id === +this.props.params.id,
										)[0].name
									}
								</div>
								<div>
									<span>Description : </span>
								</div>
								<div>
									<span>Rate : </span>
									{product.title}
								</div>
								<div>
									<span>Price : </span>
								</div>
							</div>
							<div className='item-image'>
								<img
									width={'200px'}
									height={'300px'}
									src={product.url}
									alt={product.title}
								/>
							</div>
						</Stack>
					);
				})}
			</React.Fragment>
		);
	}
}

export default withRouter(CategoryPage);
