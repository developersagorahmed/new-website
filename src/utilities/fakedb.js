// use local storage to manage card data
const addToDb = (id) => {
	let shoppingCard = [];
	let shoppingCardSigel = {};
	// console.log(id);
	// get shopping cart
	const storedCart = localStorage.getItem("shopping-cart");
	if (storedCart) {
		shoppingCard = JSON.parse(storedCart);
	} else {
		shoppingCard = [];
	}
	let shoppingCardSigelitem = shoppingCard.find((card) => card.id === id);

	const quantity = shoppingCardSigelitem ? shoppingCardSigelitem[id] : null;

	if (quantity) {
		const newQuantity = quantity + 1;
		shoppingCardSigelitem[id] = newQuantity;
		shoppingCard = shoppingCard.filter((cart) => cart.id !== id);
		shoppingCard.push(shoppingCardSigelitem);
	} else {
		shoppingCardSigel[id] = 1;
		shoppingCard.push(shoppingCardSigel);
		// shoppingCard.'641e000d58764571789436f9'=1
	}

	// 	// const quantity = localStorage.getItem(id);
	// 	if (quantity) {
	// 		// const newQuantity = +quantity + 1;

	// 		// localStorage.setItem(id, newQuantity);
	// 	} else {
	// 		// localStorage.setItem(id, 1);
	// 	}
	// };
	localStorage.setItem("shopping-cart", JSON.stringify(shoppingCard));
};

const reamoveFromCart = (id) => {
	const oldDatastring = localStorage.getItem("shopping-cart");
	const oldData = JSON.parse(oldDatastring);
	// const
	console.log(oldData, id);
};
export { addToDb, reamoveFromCart };
