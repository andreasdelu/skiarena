import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ValuePicker from "./ValuePicker";
import BookingCalendar from "./BookingCalendar";
import q from "../assets/images/question.svg";

export default function BookingItem(data) {
	const [season, setSeason] = useState("");
	const [amount, setAmount] = useState(1);
	const [price, setPrice] = useState(data.price.low);
	const [total, setTotal] = useState(data.price.low);
	const [open, setOpen] = useState(false);

	const bookingItemRef = useRef(null);
	const buttonRef = useRef(null);

	useEffect(() => setTotal(price * amount), [amount, price]);

	function handleSubmit() {
		data.sendData(data, amount, total, season);
	}
	function handleOnClick() {
		setOpen(!open);
	}

	return (
		<>
			<div ref={bookingItemRef} className={"bookingItem"}>
				<div className='bookingStart'>
					<div className='bookingItemLeft'>
						<p className='bookingName'>
							{data.name}{" "}
							<Link to={data.link}>
								<img src={q} alt='question mark' />
							</Link>
						</p>
						{data.desc ? <small>{data.desc}</small> : ""}
						{data.price.low ? (
							<ValuePicker valueChange={(e) => setAmount(e)} />
						) : (
							""
						)}
					</div>
					{data.price.low ? (
						<div className='bookingItemMid'>
							<>
								<label>Pris:</label>
								<p className='bookingItemPrice'>
									{data.price.low !== data.price.high
										? "Fra " + data.price.low + " kr."
										: data.price.low + " kr."}
								</p>
							</>
						</div>
					) : (
						""
					)}
					<div className='bookingItemRight'>
						{data.price.low ? (
							<>
								<p>
									I alt: <br /> <b>{total} kr.</b>
								</p>
								<div
									ref={buttonRef}
									onClick={handleOnClick}
									className='ctaButton'>
									{open ? "Luk" : "Vælg Dato"}
								</div>
							</>
						) : (
							<Link to={"/kontakt"} className='ctaButton'>
								Kontakt os
							</Link>
						)}
					</div>
				</div>
				{open && (
					<div className='bookingPickDate'>
						<BookingCalendar
							bookingData={data.bookingTimes}
							prices={data.price}
						/>
					</div>
				)}
			</div>
		</>
	);
}
