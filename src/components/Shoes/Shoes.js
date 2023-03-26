import React from "react";
import { add, multiply, vag } from "../../utilities/calculate";
const first = 13;
const second = 11;
const result = multiply(first, second);
const sum = add(first, second);
const vags = vag(first, second);

const Shoes = () => {
	return (
		<div>
			<h3>This is Shoes components</h3>
			<p>Result: {result}</p>
			<h4>All Price Sum is {sum}</h4>
			<h5>vag is {vags}</h5>
		</div>
	);
};

export default Shoes;
