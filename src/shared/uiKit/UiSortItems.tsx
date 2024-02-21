import { useState, useEffect } from 'react';

type sortProps = {
	image: string;
	icon: string;
	text: string;
};
const UiSortItems: React.FC<sortProps> = ({ image, icon, text }) => {
	const [lowPos, setLowPos] = useState(false);
	useEffect(() => {
		if (text.includes('Low')) {
			setLowPos(true);
		}
	}, [text]);
	return (
		<div className={`flex ${lowPos ? 'mt-[-20px] mb-[-10px]' : ''}`}>
			<div className="relative mr-[20px]">
				<img src={image} alt="картинка" />
				<img
					src={icon}
					alt="иконка"
					className={`${lowPos ? 'mt-[-11px] ml-[8px]' : 'mt-[-13px] mr-[-17px]'}`}
				/>
			</div>
			<p
				className={`text-[16px] ${lowPos ? 'ml-[-22px] mt-[-7px]' : 'ml-[-30px] mt-[-7px]'}`}
			>
				{text}
			</p>
		</div>
	);
};
export default UiSortItems;
