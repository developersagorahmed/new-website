import React from "react";
import { add, multiply, vag } from "../../utilities/calculate";
const first = 44;
const second = 23;
const adds = add(first, second);
const maltiply = multiply(first, second);
const vags = vag(first, second);

const Shart = () => {
	return (
		<div>
			<h1>Shart price is {adds}</h1>
			<h2>Shart price all Multiply {maltiply}</h2>
			<h2>Shart price all vag is {vags}</h2>
		</div>
	);
};

export default Shart;
