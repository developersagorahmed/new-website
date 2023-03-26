import React from "react";
import { addToDb, reamoveFromCart } from "../../utilities/fakedb";
import "./Cosmetic.css";

const Cosmetic = (props) => {
	const { name, price, id } = props.cosmetic;
	const addToCard = (id) => {
		addToDb(id);
	};

	const removeFromCart = (id) => {
		reamoveFromCart(id);
	};
	return (
		<div className="product">
			<h1>By this : {name}</h1>
			<p>Only for : ${price}</p>
			<p>This Cosmetics id is: {id}</p>
			<button onClick={() => addToCard(id)}>add to card</button>
			<button onClick={() => removeFromCart(id)}>Remove</button>
		</div>
	);
};

export default Cosmetic;
