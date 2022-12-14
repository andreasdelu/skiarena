import React, { useEffect, useRef, useState } from "react";
import GiftcardItem from "../components/GiftcardItem";

import giftcardData from "../Gavekort.json";

import cart from "../assets/images/cart.svg";
import close from "../assets/images/close.svg";

export default function Gavekort() {
	document.title = "SkiArena - Køb Gavekort";

	const cartRef = useRef(null);
	const openerRef = useRef(null);

	const [shoppingCart, setShoppingCart] = useState([]);

	useEffect(() => {
		cartRef.current.scrollTo(0, cartRef.current.scrollHeight);
	}, [shoppingCart]);

	function ShoppingCartItem(data) {
		return (
			<>
				<div
					data-itemid={data.id}
					data-itemseason={data.season}
					className='shoppingCartItem'>
					<p className='shoppingCartItemName'>{data.name}</p>
					<div className='shoppingCartItemBottom'>
						<p className='shoppingCartItemAmount'>
							Antal: <b>{data.amount}</b>
						</p>
						<p className='shoppingCartItemTotal'>
							Total pris: <b>{data.total} kr.</b>
						</p>
					</div>
				</div>
			</>
		);
	}

	function addToCart(item, amount, total, season) {
		for (const cartItem of shoppingCart) {
			if (
				cartItem.id === item.id &&
				total / amount === cartItem.total / cartItem.amount
			) {
				cartItem.amount += amount;
				cartItem.total += total;
				setShoppingCart((shoppingCart) => [...shoppingCart]);
				return;
			}
		}

		let name = item.name.split("-")[0];
		name = name.split("<")[0];
		const cartObject = {
			id: item.id,
			name: name,
			season: season,
			amount: amount,
			total: total,
		};

		setShoppingCart((shoppingCart) => [...shoppingCart, cartObject]);
		if (!shoppingCart.length) {
			openCart();
		}
	}

	function openCart() {
		if (openerRef.current.classList.contains("openerOpen")) {
			openerRef.current.classList.remove("openerOpen");
		} else {
			openerRef.current.classList.add("openerOpen");
		}
	}

	return (
		<>
			<div id='giftcardWrap' className='pageWrap'>
				<div className='giftCards'>
					<h1 className='pageTitle'>Køb Gavekort</h1>
					{giftcardData.map((card, i) => (
						<GiftcardItem key={i} {...card} sendData={addToCart} />
					))}
				</div>
				<div id='giftCart'>
					<div ref={openerRef} onClick={openCart} className='opener'>
						<p className='cartCount'>{shoppingCart.length}</p>
						<img className='openerCart' src={cart} alt='cart' />
						<img className='openerClose' src={close} alt='close' />
					</div>
					<div className='cartContent'>
						<h2>
							<img src={cart} alt='cart' /> Indkøbskurv
						</h2>
						<hr />
						<div ref={cartRef} className='shoppingCart'>
							{shoppingCart.length ? (
								<>
									{shoppingCart.map((item, i) => (
										<ShoppingCartItem key={i} {...item} />
									))}
								</>
							) : (
								<p style={{ textAlign: "center" }}>Din indkøbskurv er tom</p>
							)}
						</div>
						<div id='checkoutBtn' className='ctaButton'>
							Check ud
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
