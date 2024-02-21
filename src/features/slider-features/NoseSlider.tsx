import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function NoseSlider() {
	const [activeMark, setActiveMark] = useState<number | null>(5);

	const isActiveMark = (index: number) => {
		return activeMark !== null && activeMark >= index;
	};
	const arrayMarks = Array.from({ length: 10 }, (_, index) => index + 1);

	const marks = arrayMarks.map((el) => {
		let height = '18px';
		let marginTop = '0px';
		let width = '3px';
		if (el % 5 === 0) {
			height = '28px';
			marginTop = '-10px';
			width = '3.5px';
		}

		const colorValue = el / 10;
		const intensityCoefficient = 0.7;
		const r = Math.round(255 - (255 - 88) * colorValue * intensityCoefficient);
		const g = Math.round(217 - (217 - 170) * colorValue * intensityCoefficient);
		const b = Math.round(100 - (100 - 70) * colorValue * intensityCoefficient);
		const color = `rgba(${r}, ${g}, ${b}, 1)`;
		return {
			value: el,
			label: (
				<div
					style={{
						width,
						height,
						background: isActiveMark(el) ? color : '#297019',
						marginTop,
					}}
				/>
			),
		};
	});

	const handleChange = (_event: Event, newValue: number | number[]) => {
		if (typeof newValue === 'number') {
			setActiveMark(newValue);
		}
	};

	return (
		<div className="ml-1 mt-2 w-[108px]">
			<p className="text-white font-semiFont font-[16px] leading-[21.6px]">
				Nose
			</p>
			<Box sx={{ width: 115 }} className="mt-[-18px] ml-[-9px]">
				<Slider
					aria-label="Small steps"
					defaultValue={5}
					step={1}
					marks={marks}
					min={0}
					max={10}
					onChange={handleChange}
					sx={{
						'& .MuiSlider-thumb': {
							display: 'none',
						},
						'& .MuiSlider-track': {
							display: 'none',
						},
						'& .MuiSlider-rail': {
							display: 'none',
						},
						'& .MuiSlider-mark': {
							display: 'none',
						},
						'& .MuiSlider-markActive': {
							display: 'none',
						},
					}}
				/>
			</Box>
			<div className="font-regFont text-[#959595] flex justify-between text-[12px] leading-[16px] mt-[-8px]">
				<p>min</p>
				<p>max</p>
			</div>
		</div>
	);
}
