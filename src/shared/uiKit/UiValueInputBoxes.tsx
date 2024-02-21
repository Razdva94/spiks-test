import React from 'react';

type valueProps = {
	value: number;
	handleChangeValue: (e: number) => void;
	sign: string;
};

const UiValueInputBoxes: React.FC<valueProps> = ({
	value,
	handleChangeValue,
	sign,
}) => {
	return (
		<div className="pl-1 pr-1 rounded-[3px] border-[1px] border-[#606060] bg-[#212129] text-white flex font-[14px]">
			<input
				type="text"
				value={value}
				onChange={(e) => handleChangeValue(Number(e.target.value))}
				max={10000}
				className="bg-[#212129] focus: outline-none"
				style={{
					width: `${value.toString().split('').length * 10}px`,
				}}
			></input>
			<p>{sign}</p>
		</div>
	);
};

export default UiValueInputBoxes;
