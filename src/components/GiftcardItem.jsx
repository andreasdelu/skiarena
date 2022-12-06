import React, { useEffect, useRef, useState } from "react";
import ValuePicker from "./ValuePicker";

export default function GiftcardItem(data) {
	const customPriceRef = useRef(null);
	const [season, setSeason] = useState("");
	const [amount, setAmount] = useState(1);
	const [price, setPrice] = useState(data.price.low);
	const [total, setTotal] = useState(data.price.low);

	useEffect(() => setTotal(price * amount), [amount, price]);
	useEffect(() => {
		if (customPriceRef.current) {
			if (customPriceRef.current.value === "") {
				customPriceRef.current.value = 200;
			}
		}
	}, []);

	function setCustomPrice(elem) {
		if (elem.value !== "") {
			if (elem.value < 200) {
				setPrice(200);
				elem.value = 200;
			} else {
				setPrice(elem.value);
			}
		} else {
			setPrice(200);
			elem.value = 200;
		}
	}

	function handleOnClick() {
		data.sendData(data, amount, total, season);
	}

	return (
		<>
			<div className='giftcardItem'>
				<div className='giftcardItemLeft'>
					<p
						className='giftName'
						dangerouslySetInnerHTML={{ __html: data.name }}></p>
					<ValuePicker valueChange={(e) => setAmount(e)} />
				</div>
				<div className='giftcardItemMid'>
					{!data.price.custom ? (
						<>
							{data.price.high > 0 ? (
								<>
									<label htmlFor='seasonSelect'>Vælg sæson:</label>
									<select
										onChange={(e) => {
											setSeason(e.target.dataset.season);
											setPrice(e.target.value);
										}}
										name='seasonSelect'
										id='seasonSelect'>
										<option data-season='lavsæson' value={data.price.low}>
											Lavsæson: {data.price.low} kr.
										</option>
										<option data-season='højsæson' value={data.price.high}>
											Højsæson: {data.price.high} kr.
										</option>
									</select>
								</>
							) : (
								<div className='priceOnly'>
									<label htmlFor=''>Pris:</label>
									<p style={{ margin: 0 }}>{data.price.low} kr.</p>
								</div>
							)}
						</>
					) : (
						<>
							<div className='customGiftValue'>
								<input
									ref={customPriceRef}
									onBlur={(e) => setCustomPrice(e.target)}
									type='number'
									placeholder='Min. 200'
								/>
								<p>Kr.</p>
							</div>
						</>
					)}
				</div>
				<div className='giftcardItemRight'>
					<p>
						I alt: <br /> <b>{total} kr.</b>
					</p>
					<div onClick={handleOnClick} className='ctaButton'>
						Læg i kurv
					</div>
				</div>
			</div>
		</>
	);
}
