import React, { useEffect, useState } from "react";

export default function ValuePicker({ valueChange }) {
	const [num, setnum] = useState(0);

	useEffect(() => {
		if (num < 1) {
			setnum(1);
		}
		if (num > 999) {
			setnum(999);
		}
		valueChange(parseInt(num));
	}, [num]);

	return (
		<>
			<div className='valuePicker'>
				<div
					onClick={() => {
						if (num > 1) {
							setnum(parseInt(num) - 1);
						}
					}}
					className='valuePickerButton'>
					–
				</div>
				<input
					onChange={(e) => {
						if (e.target.value !== "") {
							setnum(e.target.value);
						}
					}}
					type='number'
					pattern='[0-9]'
					min='1'
					max='999'
					className='valuePickerNumber'
					value={num}
				/>
				<div
					onClick={() => {
						if (num < 999) {
							setnum(parseInt(num) + 1);
						}
					}}
					className='valuePickerButton'>
					+
				</div>
			</div>
		</>
	);
}
