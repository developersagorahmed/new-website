import React, { useEffect, useState } from "react";
import Cosmetic from "../Cosmetic/Cosmetic";
// import { add, vag } from "../../utilities/calculate";

// const first = 55;
// const second = 66;
// const total = add(first, second);
// const vags = vag(first, second);
const Cosmetics = () => {
	const [cosmetics, setCosmetics] = useState([]);
	useEffect(() => {
		fetch("data..json")
			.then((res) => res.json())
			.then((data) => setCosmetics(data));
	}, []);
	return (
		<div>
			<h1>welcome to my Cosmetics stores</h1>
			{cosmetics.map((cosmetic) => (
				<Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>
			))}
		</div>
	);
};

export default Cosmetics;
