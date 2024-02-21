import Search from '../../assets/images/search.png';

function UiInput() {
	return (
		<div className="ml-5 h-11 border-[1px] rounded-xl border-[#959595] flex items-center">
			<img src={Search} alt="поиск" className="w-[20px] h-[20px] ml-5" />
			<input
				className="ml-2 w-[420px] bg-[#171722] text-white focus:outline-none"
				placeholder="Search for a product, flower, etc"
			></input>
		</div>
	);
}

export default UiInput;
