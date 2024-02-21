/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UiButtonDelCat from '../../shared/uiKit/UiButtonDelCat';
import { collectCheckBoxInfo } from '../../store/checkboxSlice';

interface CheckboxHandlerState {
	[key: string]: [boolean, any];
}

const ClassificationButtons = () => {
	const dispatch = useDispatch();
	const formState = useSelector(
		(state: CheckboxHandlerState) => state.checkboxHandler,
	);

	const arr: [boolean, string][] = Object.values(formState);

	const filteredArr: [boolean, string][] = arr.filter((el) => {
		return el[0];
	});
	const mappedArr: string[] = filteredArr.map((el) => el[1]);
	const handleClickDelButton = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		const id = (e.target as HTMLButtonElement).id;
		console.log(id);
		const values = Object.values(formState).map((el) => el[1]);
		const indexesOfCheckboxes = values.reduce((acc, el, i) => {
			if (el === id) {
				acc.push(i + 1);
			}
			return acc;
		}, []);

		const checkBoxArray = indexesOfCheckboxes.map((el: any) => {
			return `checkbox${el}`;
		});

		const updatedState = { ...formState };
		checkBoxArray.forEach((id: any) => {
			updatedState[id] = [false, updatedState[id as any][1]];
		});

		dispatch(collectCheckBoxInfo(updatedState));
	};
	return (
		<div className="mt-[20px] w-[870px] flex flex-row">
			<div>
				<p className="text-white font-semiFont">1034,5&nbsp;Results</p>
			</div>
			<div className="flex flex-wrap ml-10 gap-3">
				{mappedArr.map((el, i) => {
					return (
						<div key={i}>
							<UiButtonDelCat label={el} handleClick={handleClickDelButton} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ClassificationButtons;
