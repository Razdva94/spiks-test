import React, { useState } from 'react';
import Bushes from '../../assets/images/bushes.png';

type checkboxProps = {
	label: string;
};
const UiXLCheckboxes: React.FC<checkboxProps> = ({ label }) => {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	return (
		<div
			style={{
				padding: '1px',
				borderColor: 'transparent',
				backgroundImage:
					'linear-gradient(to bottom, rgba(132, 213, 44, 0.36), rgba(23, 23, 34, 0))',
				borderRadius: '10px',
			}}
		>
			<label
				className={`${isChecked ? 'bg-[#212129]' : 'bg-[#353542]'} mg h-11 rounded-[10px] inline-flex items-center
		cursor-pointer font-titleFont text-white]`}
				style={{
					filter: isChecked
						? 'drop-shadow(0px 5px 5px rgba(132, 213, 44, 0.2))'
						: 'none',
				}}
			>
				<img src={Bushes} alt="кусты" className="ml-5 mr-3" />
				<p className="mr-7 text-white">{label}</p>
				<input
					type="checkbox"
					className="hidden"
					checked={isChecked}
					onChange={handleCheckboxChange}
				/>
			</label>
		</div>
	);
};

export default UiXLCheckboxes;
