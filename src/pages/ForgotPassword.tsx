import Container from "@/components/Container";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
	return (
		<Container className="my-10 font-monda">
			<Link to="/">
				<div className="p-2 bg-[#F4E3FA] h-fit w-fit rounded-lg">
					<img
						src="/assets/icons/left-arrow.svg"
						alt=""
					/>
				</div>
				<header className="mt-7">
					<h1 className="text-3xl font-bold tracking-[0.073px]">
						Forgot Password ?
					</h1>
					<p className="text-[#3A3A3A82] tracking-[0.073px] mt-3">
						Enter your email address to get the password reset link .
					</p>
				</header>
			</Link>
			<form
				className="mt-20 flex flex-col justify-center"
				action=""
			>
				<div>
					<label
						className="text-[#3A3A3A] text-[15px] tracking-[0.073px] font-bold block mb-[10px]"
						htmlFor="email-address"
					>
						Email Address
					</label>
					<input
						className="border border-[#898A8D] w-full rounded-xl h-[46px] px-3"
						name="email-address"
						type="email"
					/>
				</div>
				<button
					type="button"
					className="bg-[#A013CECC] text-white py-3 text-sm font-bold tracking-[0.073px] rounded-2xl mx-4 mt-7"
				>
					Password Reset
				</button>
			</form>
			<Link
				to="/signup"
				className="tracking-[0.073px] mt-12 text-center custom-gradient font-bold block"
			>
				Create an Account
			</Link>
		</Container>
	);
};

export default ForgotPassword;
