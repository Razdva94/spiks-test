import React from 'react';
import PriceRangeSlider from '../../features/slider-features/PriceRangeSlider';
import ProcentRangeSlide from '../../features/slider-features/ProcentRangeSlide';
import NoseSlider from '../../features/slider-features/NoseSlider';

function SliderConteiner() {
	const titles = ['THC, %', 'CBD, %'];
	return (
		<div className="flex gap-4 mt-7 w-fit">
			<PriceRangeSlider />
			<ProcentRangeSlide title={titles[0]} />
			<ProcentRangeSlide title={titles[1]} />
			<NoseSlider />
		</div>
	);
}

export default SliderConteiner;
