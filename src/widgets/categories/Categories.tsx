import { useState } from 'react';
import UiButtonCategories from '../../shared/uiKit/UiButtonCategories';
import CategoriesList from '../../entities/categories-list/CategoriesList';

function Categories() {
	const [displayList, setDisplayList] = useState(false);
	const handleToggleList = () => {
		setDisplayList(!displayList);
	};
	return (
		<div className="mt-11 mr-8">
			<div className="flex justify-end">
				<UiButtonCategories onClick={handleToggleList} />
			</div>
			<CategoriesList display={displayList} />
		</div>
	);
}

export default Categories;
