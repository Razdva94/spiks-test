import UiInput from '../../shared/uiKit/UiInput';
import UiXLCheckboxes from '../../shared/uiKit/UiXLCheckboxes';

function Header() {
	const buttonArray = ['Buds', 'Edible', 'Non Edible', 'Concentrante'];
	return (
		<header className="flex items-center yellow ml-[14px]">
			<h1 className="text-white text-[30px] leading-[30px] font-titleFont mt-0 mb-0">
				Marketplace
			</h1>
			<UiInput />
			<div className="ml-3 flex gap-2">
				{buttonArray.map((el, i) => {
					return (
						<div key={i}>
							<UiXLCheckboxes label={el} />
						</div>
					);
				})}
			</div>
		</header>
	);
}

export default Header;
