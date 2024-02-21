/* eslint-disable @typescript-eslint/no-explicit-any */
import {} from 'react';
import ClassificationButtons from '../../features/classification-features/ClassificationButtons';
import ClassificationLists from '../../features/classification-features/ClassificationLists';

const Classification = () => {
	return (
		<div className="ml-[10px]">
			<ClassificationButtons />
			<ClassificationLists />
		</div>
	);
};

export default Classification;
