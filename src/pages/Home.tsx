import Container from "@components/container";
import PageContainer from "@components/pageContainer";
import Transactions from "@components/transactions";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<PageContainer>
			<Container className="my-10 mb-20 font-monda">
				<header>
					<div className="flex justify-between">
						<span className="tracking-[-0.26px]">Welcome Back</span>
						<div className="flex gap-x-6">
							<img
								src="/assets/icons/hamburger-menu.svg"
								alt=""
							/>
							<Link to="/profile">
								<img
									src="/assets/images/user-profile.png"
									alt=""
								/>
							</Link>
						</div>
					</div>
					<h1 className="text-[#333A45] text-2xl tracking-[-0.48px] font-bold">
						Jason
					</h1>
				</header>
				<section>
					<div className="relative header-bg mt-14 rounded-[20px] py-4 px-5 h-[161px]">
						<img
							className="absolute top-0 left-0 opacity-5 w-full h-full"
							src="/assets/images/bg-noise.png"
							alt=""
						/>
						<div className="flex justify-between">
							<span className="text-white font-cabinet tracking-[-0.32px]">
								Savings account <span className="font-bold">452 050 791</span>
							</span>
							<img
								src="/assets/icons/others.svg"
								alt=""
							/>
						</div>
						<div className="text-center">
							<h2 className="text-4xl font-bold text-white mt-4">$9000.00</h2>
							<p className="text-[#FFFFFFDE] text-sm mt-3">
								Your total balance{" "}
							</p>
						</div>
						<img
							className="absolute bottom-3 right-5"
							src="/assets/icons/eye.svg"
							alt=""
						/>
					</div>
					<Transactions />
				</section>
			</Container>
		</PageContainer>
	);
};

export default Home;
