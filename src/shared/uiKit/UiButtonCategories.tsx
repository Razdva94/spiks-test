import React from 'react';
import categoryButton from '../../assets/images/categoryButton.png';

type buttonProps = {
	onClick: () => void;
};
const UiButtonCategories: React.FC<buttonProps> = ({ onClick }) => {
	return (
		<button type="button" onClick={onClick}>
			<img
				src={categoryButton}
				alt="кнопка категорий"
				className="cursor-pointer"
			/>
		</button>
	);
};

export default UiButtonCategories;
