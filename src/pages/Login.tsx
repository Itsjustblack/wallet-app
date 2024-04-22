import Container from "@/components/Container";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<Container className="my-10 font-monda">
			<header>
				<h1 className="text-3xl font-bold tracking-[0.073px]">Login</h1>
				<p className="text-[#3A3A3A82] tracking-[0.073px] mt-1">Welcome Back</p>
			</header>
			<form
				className="mt-10 flex flex-col justify-center"
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
				<div className="mt-[30px]">
					<label
						className="text-[#3A3A3A] text-[15px] tracking-[0.073px] font-bold block mb-[10px]"
						htmlFor="password"
					>
						Password
					</label>
					<input
						className="border border-[#898A8D] w-full rounded-xl h-[46px] px-3"
						name="password"
						type="text"
					/>
					<Link
						to="/forgot-password"
						className="tracking-[0.073px] text-sm mt-[10px] custom-gradient font-bold block"
					>
						Forgot Password?
					</Link>
				</div>
				<button
					type="button"
					className="bg-[#A013CECC] text-white py-3 text-sm font-bold tracking-[0.073px] rounded-2xl mx-4 mt-10"
				>
					Login
				</button>
			</form>
			<div className="flex h-fit mt-8 items-center justify-center gap-x-1">
				<div className="border-b w-[33%] border-[#898A8D80]"></div>
				<p className="text-[#898A8D] text-xs tracking-[0.073px]">
					or sign in with
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
				to="/signup"
				className="tracking-[0.073px] mt-8 text-center custom-gradient font-bold block"
			>
				Create an Account
			</Link>
		</Container>
	);
};

export default Login;
