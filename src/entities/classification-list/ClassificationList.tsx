/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { collectCheckBoxInfo } from '../../store/checkboxSlice';
import arrowList from '../../assets/images/arrowList.png';

interface CheckboxHandlerState {
	[key: string]: [boolean, any];
}

type classificationProps = {
	listOfClassifications: object;
};
const ClassificationList: React.FC<classificationProps> = ({
	listOfClassifications,
}) => {
	const formState = useSelector(
		(state: CheckboxHandlerState) => state.checkboxHandler,
	);
	const [openList, setOpenList] = useState(true);
	const handleClickToggleList = () => {
		setOpenList(!openList);
	};
	const title = Object.keys(listOfClassifications)[0];
	const labels = Object.values(listOfClassifications).flat();
	const dispatch = useDispatch();
	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { id, checked } = event.target;
		dispatch(
			collectCheckBoxInfo({
				...formState,
				[id]: [checked, formState[id as any][1]],
			}),
		);
	};
	return (
		<div className="">
			<div className="flex justify-between items-center">
				<h3 className="font-semiFont text-[18px] leading-[24px] m-0 mb-2 ">
					{title}
				</h3>
				<button type="button" onClick={handleClickToggleList}>
					<img
						src={arrowList}
						alt="открытие списка"
						className={`mr-4 mb-[5px] ${!openList && 'rotate-180'}`}
					/>
				</button>
			</div>
			{labels.map((el, i) => {
				const { checkbox, labelName } = el;
				return (
					<div
						className={`ml-[10px] ${!openList && 'hidden'}`}
						key={i * Math.random()}
					>
						<FormGroup className="mb-[5px]">
							<FormControlLabel
								className={`${formState[checkbox][0] ? 'text-white' : 'text-[#959595]'}`}
								control={
									<Checkbox
										className="
										 leading-[24px] w-[5px] h-[5px] rounded-[2px] mr-[3px]"
										checked={formState[checkbox][0] || false}
										onChange={handleCheckboxChange}
										id={checkbox}
									/>
								}
								label={
									<span
										className={`${formState[checkbox][0] ? 'font-semiFont' : 'font-regFont'}`}
									>
										{labelName}
									</span>
								}
							/>
						</FormGroup>
					</div>
				);
			})}
		</div>
	);
};

export default ClassificationList;
