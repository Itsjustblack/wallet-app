import CardSlider from "@/components/CardSlider";
import Container from "@/components/Container";
import PageContainer from "@/components/PageContainer";
import { Link } from "react-router-dom";

const Cards = () => {
	return (
		<PageContainer>
			<Container className="pt-10 font-dmSans">
				<header className="flex items-center justify-start">
					<Link to="/profile">
						<img
							src="/assets/icons/arrow-left.svg"
							alt=""
						/>
					</Link>
					<span className="text-sm mx-auto font-bold leading-5 pr-4">
						My Cards
					</span>
				</header>
			</Container>
			<CardSlider />
			<Container className="mt-10">
				<ul className="grid gap-y-6 px-4 py-[17px] rounded-md shadow-md">
					<li className="relative flex items-center">
						<div className="size-10 bg-[#0601B4] bg-opacity-5 rounded-full flex justify-center items-center mr-4">
							<img
								className="size-5"
								src="/assets/icons/bell.svg"
								alt=""
							/>
						</div>
						<span className="text-[#181D27] font-medium text-sm mb-1">
							Add a new card
						</span>
						<img
							className="absolute top-1/2 right-0"
							src="/assets/icons/chevron-right.svg"
							alt=""
						/>
					</li>
					<li className="relative flex items-center">
						<div className="size-10 bg-[#0601B4] bg-opacity-5 rounded-full flex justify-center items-center mr-4">
							<img
								className="size-5"
								src="/assets/icons/bell.svg"
								alt=""
							/>
						</div>
						<span className="text-[#181D27] font-medium text-sm mb-1">
							Delete a Card
						</span>
						<img
							className="absolute top-1/2 right-0"
							src="/assets/icons/chevron-right.svg"
							alt=""
						/>
					</li>
				</ul>
			</Container>
		</PageContainer>
	);
};

export default Cards;
