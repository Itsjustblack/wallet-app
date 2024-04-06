import Container from "@components/container";
import PageContainer from "@components/pageContainer";
import { Link } from "react-router-dom";

const Profile = () => {
	return (
		<PageContainer>
			<Container className="my-10 mb-20 font-dmSans">
				<header>
					<h2 className="text-[#181D27] font-bold text-2xl tracking-[0.073px] font-monda">
						Profile
					</h2>
					<div className="shadow-md mt-2 bg-[#8930B2] flex justify-between items-center h-[89px] px-4 rounded-md">
						<div className="flex gap-x-3 items-center">
							<div className="bg-white h-[57px] p-[2px] rounded-full">
								<img
									className="w-full h-full object-cover"
									src="/assets/icons/user.svg"
									alt=""
								/>
							</div>
							<div className="font-dmSans">
								<span className="text-white text-sm mb-1 font-bold">
									Itunuoluwa Abidoye
								</span>
								<p className="text-[#D7D7D7] text-xs">@Itunuoluwa</p>
							</div>
						</div>
						<Link to="/update-profile">
							<img
								className="object-cover"
								src="/assets/icons/pencil.svg"
								alt=""
							/>
						</Link>
					</div>
				</header>
				<section className="pt-5 pb-8 px-4 mt-[52px] rounded-md shadow-md">
					<ul className="grid gap-y-6">
						<li className="relative flex">
							<div className="size-10 bg-[#0601B4] bg-opacity-5 rounded-full flex justify-center items-center mr-4">
								<img
									className="size-5"
									src="/assets/icons/profile-bg.svg"
									alt=""
								/>
							</div>
							<div>
								<span className="text-[#181D27] font-medium text-sm mb-1">
									My Account
								</span>
								<p className="text-xs text-[#ABABAB]">
									Make changes to your account
								</p>
							</div>
							<img
								className="absolute top-1/2 right-0"
								src="/assets/icons/chevron-right.svg"
								alt=""
							/>
						</li>
						<li className="relative flex">
							<div className="size-10 bg-[#0601B4] bg-opacity-5 rounded-full flex justify-center items-center mr-4">
								<img
									className="size-5"
									src="/assets/icons/profile-bg.svg"
									alt=""
								/>
							</div>
							<div>
								<span className="text-[#181D27] font-medium text-sm mb-1">
									My Cards
								</span>
								<p className="text-xs text-[#ABABAB]">Add a card</p>
							</div>
							<img
								className="absolute top-1/2 right-0"
								src="/assets/icons/chevron-right.svg"
								alt=""
							/>
						</li>
						<li className="relative flex">
							<div className="size-10 bg-[#0601B4] bg-opacity-5 rounded-full flex justify-center items-center mr-4">
								<img
									className="size-5"
									src="/assets/icons/profile-bg.svg"
									alt=""
								/>
							</div>
							<div>
								<span className="text-[#181D27] font-medium text-sm mb-1">
									My Wallet
								</span>
								<p className="text-xs text-[#ABABAB]">
									Add money to your wallet
								</p>
							</div>
							<img
								className="absolute top-1/2 right-0"
								src="/assets/icons/chevron-right.svg"
								alt=""
							/>
						</li>
						<li className="relative flex">
							<div className="size-10 bg-[#0601B4] bg-opacity-5 rounded-full flex justify-center items-center mr-4">
								<img
									className="size-5"
									src="/assets/icons/shield.svg"
									alt=""
								/>
							</div>
							<div>
								<span className="text-[#181D27] font-medium text-sm mb-1">
									Withdraw funds
								</span>
								<p className="text-xs text-[#ABABAB]">
									Withdraw money from your wallet
								</p>
							</div>
							<img
								className="absolute top-1/2 right-0"
								src="/assets/icons/chevron-right.svg"
								alt=""
							/>
						</li>
						<li className="relative flex">
							<div className="size-10 bg-[#0601B4] bg-opacity-5 rounded-full flex justify-center items-center mr-4">
								<img
									className="size-5"
									src="/assets/icons/logout.svg"
									alt=""
								/>
							</div>
							<div>
								<span className="text-[#555555] font-medium text-sm mb-1">
									Sign Out
								</span>
								<p className="text-xs text-[#ABABAB]">
									Log out from your account
								</p>
							</div>
							<img
								className="absolute top-1/2 right-0"
								src="/assets/icons/chevron-right.svg"
								alt=""
							/>
						</li>
					</ul>
				</section>
				<section className="mt-10">
					<p className="font-monda text-base tracking-[0.073px] px-[10px]">
						More
					</p>
					<ul className="grid gap-y-6 mt-5 px-4 py-[17px] rounded-md shadow-md">
						<li className="relative flex items-center">
							<div className="size-10 bg-[#0601B4] bg-opacity-5 rounded-full flex justify-center items-center mr-4">
								<img
									className="size-5"
									src="/assets/icons/bell.svg"
									alt=""
								/>
							</div>
							<span className="text-[#181D27] font-medium text-sm mb-1">
								Help & Support
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
									src="/assets/icons/heart.svg"
									alt=""
								/>
							</div>
							<span className="text-[#181D27] font-medium text-sm mb-1">
								About App
							</span>
							<img
								className="absolute top-1/2 right-0"
								src="/assets/icons/chevron-right.svg"
								alt=""
							/>
						</li>
					</ul>
				</section>
			</Container>
		</PageContainer>
	);
};

export default Profile;
