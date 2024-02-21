import React from 'react';
import Cross from '../../assets/images/cross.png';

type buttonProps = {
	label: string;
	handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
const UiButtonDelCat: React.FC<buttonProps> = ({ label, handleClick }) => {
	return (
		<div
			className="flex gap-1 text-white bg-[#297019] pt-[6px] pb-[6px] pl-[10px] pr-[10px]
			font-regFont text-[12px] leading-[16px] rounded-[20px] translate-y-[-5px]"
		>
			{label}
			<button onClick={(e) => handleClick(e)} type="button">
				<img src={Cross} alt="крест" id={label} />
			</button>
		</div>
	);
};

export default UiButtonDelCat;
