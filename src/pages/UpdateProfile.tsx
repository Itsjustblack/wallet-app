import Container from "@components/container";
import DatePicker from "@components/container/datePicker";
import DropDown from "@components/dropDown";
import PageContainer from "@components/pageContainer";
import { Link } from "react-router-dom";

const UpdateProfile = () => {
	return (
		<PageContainer>
			<Container className="my-10 mb-20 font-dmSans">
				<header className="flex items-center justify-start">
					<Link to="/profile">
						<img
							src="/assets/icons/arrow-left.svg"
							alt=""
						/>
					</Link>
					<span className="text-sm mx-auto font-medium leading-5 pr-4">
						Bio-Data
					</span>
				</header>
				<div className="flex flex-col items-center mt-10">
					<div className="bg-[#0601b426] p-1 rounded-full overflow-hidden w-fit">
						<img
							className="object-cover size-[78px]"
							src="/assets/icons/user.svg"
							alt=""
						/>
					</div>
					<div className="text-center mt-5">
						<span className="text-base text-[#181D27] font-bold">
							Itunuoluwa Abidoye
						</span>
						<p className="text-[#ABABAB] text-xs">Itunuoluwa@petra.africa</p>
					</div>
				</div>
				<form className="mt-[66px] grid gap-y-5">
					<input
						className="placeholder:text-[#555] text-[#555] text-xs w-full py-[18px] px-4 border-b border-[#E8E8E8]"
						type="text"
						placeholder="What’s your first name?"
					/>
					<input
						className="placeholder:text-[#555] text-[#555] text-xs w-full py-[18px] px-4 border-b border-[#E8E8E8]"
						type="text"
						placeholder="And your last name?"
					/>
					<input
						className="placeholder:text-[#555] text-[#555] text-xs w-full py-[18px] px-4 border-b border-[#E8E8E8]"
						type="text"
						placeholder="Email"
					/>
					<DropDown />
					<DatePicker />
				</form>
			</Container>
		</PageContainer>
	);
};

export default UpdateProfile;
