import * as React from 'react';
import ClassificationList from '../../entities/classification-list/ClassificationList';
import { ARR_CHECKBOXES } from './constants/constants';
import backgroundLeaf from '../../assets/images/backgroundLeaf.png';

const ClassificationLists: React.FC = () => {
	return (
		<div
			className="w-[242px] mt-[27px] pt-[.5px] mb-[200px] overflow-hidden"
			style={{
				paddingLeft: '1px',
				paddingRight: '1px',
				borderColor: 'transparent',
				backgroundImage:
					'linear-gradient(to bottom, rgba(132, 213, 44, 0.36), rgba(23, 23, 34, 0))',
				borderRadius: '10px',
			}}
		>
			<div className="bg-[#353542] w-[240px] pl-[12px] rounded-[10px] relative pb-[20px]">
				<img
					src={backgroundLeaf}
					alt="лист"
					className="absolute top-[35%] left-[0px]"
				/>
				{ARR_CHECKBOXES.map((listOfClassifications, i) => {
					return (
						<div
							key={i}
							className=" bg-[#353542] w-[220px] rounded-[10px] text-white mb-[8px] pt-[8px] even:pt-[12px]"
						>
							<ClassificationList
								listOfClassifications={listOfClassifications}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ClassificationLists;
