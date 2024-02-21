import Header from '../widgets/header/Header';
import SliderConteiner from '../widgets/slider-container/SliderConteiner';
import Categories from '../widgets/categories/Categories';
import Classification from '../widgets/classification/Classification';
function MainPage() {
	return (
		<div className=" bg-[#171722] flex flex-col items-center font-regFont min-h-screen">
			<div className=" bg-[#171722] w-[1490px]">
				<div className="mt-[22px] ml-[20px]">
					<Header />
					<main className="flex justify-between">
						<div>
							<SliderConteiner />
							<Classification />
						</div>
						<Categories />
					</main>
				</div>
			</div>
		</div>
	);
}

export default MainPage;
