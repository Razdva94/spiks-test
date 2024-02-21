import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import UiValueInputBoxes from '../../shared/uiKit/UiValueInputBoxes';

export default function PriceRangeSlider() {
	const [value, setValue] = React.useState<number[]>([2300, 3700]);

	const handleChange = (_event: Event, newValue: number | number[]) => {
		setValue(newValue as number[]);
	};

	const handleChangeMin = (num: number) => {
		if (isNaN(num)) {
			num = 0;
		}
		if (num > 10000) {
			num = 10000;
		}
		if (num > value[1]) {
			value[1] = num;
		}

		setValue((prevValue) => [(prevValue[0] = num), prevValue[1]]);
	};
	const handleChangeMax = (num: number) => {
		if (isNaN(num)) {
			num = 0;
		}
		if (num > 10000) {
			num = 10000;
		}
		if (num < value[0]) {
			value[0] = num;
		}

		setValue((prevValue) => [prevValue[0], (prevValue[1] = num)]);
	};

	return (
		<div className="ml-3 w-[227px]">
			<p className="text-white font-semiFont font-[16px] leading-[21.6px] mb-2">
				Price Range
			</p>
			<Box sx={{ width: '210px' }} className="ml-2">
				<Slider
					value={value}
					onChange={handleChange}
					valueLabelDisplay="auto"
					sx={{
						'& .MuiSlider-thumb': {
							backgroundColor: 'rgba(122, 203, 34, 1)',
							boxShadow: 'none',
							width: '16px',
							height: '16px',
						},
						'& .MuiSlider-track': {
							backgroundColor: 'rgba(122, 203, 34, 1)',
							border: 'none',
							boxShadow: '0px 5px 15px rgba(132, 213, 44, 0.31)',
						},

						'& .MuiSlider-rail': {
							backgroundColor: 'rgba(48, 48, 61, 1)',
						},
						'& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible, & .MuiSlider-thumb.Mui-active':
							{
								boxShadow: 'none',
							},
					}}
					valueLabelFormat={(value) => `${value} $`}
					min={0}
					max={10000}
				/>
			</Box>
			<div className="flex justify-between mt-[-3px]">
				<UiValueInputBoxes
					value={value[0]}
					handleChangeValue={handleChangeMin}
					sign={'$'}
				/>
				<UiValueInputBoxes
					value={value[1]}
					handleChangeValue={handleChangeMax}
					sign={'$'}
				/>
			</div>
		</div>
	);
}
