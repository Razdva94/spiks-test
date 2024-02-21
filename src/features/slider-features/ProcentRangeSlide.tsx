import * as React from 'react';
import { Box } from '@mui/system';
import { Slider } from '@mui/material';
import UiValueInputBoxes from '../../shared/uiKit/UiValueInputBoxes';

type titleProp = {
	title: string;
};
const ProcentRangeSlide: React.FC<titleProp> = ({ title }) => {
	const [value, setValue] = React.useState<number>(10);

	const handleChange = (
		event: Event,
		newValue: number | number[] | undefined,
	) => {
		if (typeof newValue === 'number') {
			setValue(newValue);
		}
	};

	const handleChangeValue = (num: number) => {
		if (isNaN(num)) {
			num = 0;
		}
		if (num > 100) {
			num = 100;
		}
		setValue(num);
	};
	return (
		<div className="ml-3 w-[227px]">
			<p className="text-white font-semiFont font-[16px] leading-[21.6px] mb-2">
				{title}
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
					valueLabelFormat={(value) => `${value} %`}
					min={0}
					max={100}
				/>
				<div className="flex justify-end mt-[-3px]">
					<UiValueInputBoxes
						value={value}
						handleChangeValue={handleChangeValue}
						sign={'%'}
					/>
				</div>
			</Box>
		</div>
	);
};

export default ProcentRangeSlide;
