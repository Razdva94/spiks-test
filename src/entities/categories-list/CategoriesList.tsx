import React from 'react';
import Calendar from '../../assets/images/sort-icons/Calendar.png';
import ArrowTop from '../../assets/images/sort-icons/ArrowTop.png';
import ArrowBottom from '../../assets/images/sort-icons/ArrowBottom.png';
import CBD from '../../assets/images/sort-icons/CBD.png';
import THC from '../../assets/images/sort-icons/THC.png';
import VectorTop from '../../assets/images/sort-icons/VectorTop.png';
import VectorBottom from '../../assets/images/sort-icons/VectorBottom.png';
import UiSortItems from '../../shared/uiKit/UiSortItems';

type categoriesProps = {
	display: boolean;
};
const CategoriesList: React.FC<categoriesProps> = ({ display }) => {
	const sortArrImages = [
		{ img: Calendar, text: 'Date (New first)' },
		{ img: Calendar, text: 'Date (Old first)' },
		{ img: ArrowTop, text: 'Price (High first)' },
		{ img: ArrowBottom, text: 'Price (Low first)' },
	];

	const sortArrElements = [
		{ img: THC, icon: VectorTop, text: 'Total THC (High first)' },
		{ img: THC, icon: VectorBottom, text: 'Total THC (Low first)' },
		{ img: CBD, icon: VectorTop, text: 'Total THC (High first)' },
		{ img: CBD, icon: VectorBottom, text: 'Total THC (Low first)' },
	];
	return (
		<div
			className={`rounded-[10px] p-[20px] bg-[#212129] mt-4 text-white text-[18px] leading-[24px] ${display && 'hidden'}`}
		>
			<p className="mb-[10px]">Sort by:</p>
			{sortArrImages.map((el, i) => {
				return (
					<div className="flex gap-2 mb-[10px]" key={i}>
						<img src={el.img} alt="иконка" />
						<p className="text-[16px]">{el.text}</p>
					</div>
				);
			})}
			{sortArrElements.map((el, i) => {
				return (
					<div className="mt-[15px]" key={i}>
						<UiSortItems image={el.img} icon={el.icon} text={el.text} />
					</div>
				);
			})}
		</div>
	);
};

export default CategoriesList;
