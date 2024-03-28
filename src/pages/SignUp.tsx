import Container from "@components/container";
import { Link } from "react-router-dom";

const SignUp = () => {
	return (
		<Container className="my-10 font-monda">
			<h1 className="text-3xl font-bold tracking-[0.073px]">
				Create an Account
			</h1>
			<form
				className="mt-10 flex flex-col justify-center"
				action=""
			>
				<div>
					<label
						className="text-[#3A3A3A] text-[15px] tracking-[0.073px] font-bold block mb-[10px]"
						htmlFor="username"
					>
						Name
					</label>
					<input
						className="border border-[#898A8D] w-full rounded-xl h-[46px]"
						name="username"
						type="text"
					/>
				</div>
				<div className="mt-[30px]">
					<label
						className="text-[#3A3A3A] text-[15px] tracking-[0.073px] font-bold block mb-[10px]"
						htmlFor="email-address"
					>
						Email Address
					</label>
					<input
						className="border border-[#898A8D] w-full rounded-xl h-[46px]"
						name="email-address"
						type="email"
					/>
				</div>
				<div className="mt-[30px]">
					<label
						className="text-[#3A3A3A] text-[15px] tracking-[0.073px] font-bold block mb-[10px]"
						htmlFor="password"
					>
						Password
					</label>
					<input
						className="border border-[#898A8D] w-full rounded-xl h-[46px]"
						name="password"
						type="text"
					/>
				</div>
				<p className="text-[#937979] text-sm tracking-[0.073px] mt-[10px] text-center">
					By continuing, you agree to our{" "}
					<span className="custom-gradient font-bold">terms of service.</span>
				</p>
				<button
					type="button"
					className="bg-[#A013CECC] text-white py-3 text-sm font-bold tracking-[0.073px] rounded-2xl mx-4 mt-10"
				>
					Register
				</button>
			</form>
			<div className="flex h-fit mt-8 items-center justify-center gap-x-1">
				<div className="border-b w-[33%] border-[#898A8D80]"></div>
				<p className="text-[#898A8D] text-xs tracking-[0.073px]">
					or sign up with
				</p>
				<div className="border-b w-[33%] border-[#898A8D80]"></div>
			</div>
			<button
				type="submit"
				className="bg-[#E4E7EB] flex justify-center gap-x-[18px] w-full py-3 text-sm tracking-[0.073px] rounded-2xl mt-11"
			>
				<img
					src="/assets/icons/google.svg"
					alt=""
				/>
				<span className="text-[#1E1E1E]">Continue with Google</span>
			</button>
			<Link
				to="/"
				className="text-[#937979] text-sm tracking-[0.073px] mt-8 text-center block"
			>
				Already have an account?{" "}
				<span className="custom-gradient font-bold">Sign in here</span>
			</Link>
		</Container>
	);
};

export default SignUp;
