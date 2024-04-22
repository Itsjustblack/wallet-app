import { Link } from "react-router-dom";
import { useMobileMenuStore } from "../../../store/mobileMenu";
import { AnimatePresence, motion } from "framer-motion";

const MobileNav = () => {
	const navItems = [
		{
			title: "Profile",
			path: "/profile",
		},
		{
			title: "Payments",
			path: "/",
		},
		{
			title: "Transactions",
			path: "/",
		},
		{
			title: "My Cards",
			path: "/",
		},
		{
			title: "My Wallet",
			path: "/",
		},
	];

	const isOpen = useMobileMenuStore((s) => s.isOpen);
	const toggleMenu = useMobileMenuStore((s) => s.toggleMenu);

	return (
		<AnimatePresence mode="sync">
			{isOpen ? (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="absolute w-full h-full grid grid-cols-[75vw_auto] z-10"
				>
					<nav className="w-full bg-white h-full py-8 px-5 z-10">
						<div className="flex justify-center gap-x-6 items-center">
							<img
								className="rounded-full size-[52px] object-cover"
								src="/assets/icons/user.svg"
								alt=""
							/>
							<div>
								<span className="font-monda text-2xl tracking-[-0.48px] font-bold text-[#333A45]">
									Jason
								</span>
								<p className="text-[#3A3A3A] font-monda">jason@gmail.com</p>
							</div>
						</div>
						<ul className="pl-5 mt-14 grid gap-y-6">
							{navItems.map(({ title, path }) => (
								<li key={title}>
									<Link
										className="flex gap-x-7 w-full py-3"
										to={path}
									>
										<img
											src="/assets/icons/ecclipse.svg"
											alt=""
										/>
										<span className="font-monda">{title}</span>
									</Link>
								</li>
							))}
						</ul>
						<button
							type="button"
							className="border border-[#a013cecc] w-full py-[10px] text-lg rounded-xl mt-10"
						>
							Sign Out
						</button>
					</nav>
					<div
						onClick={() => toggleMenu()}
						className="w-full h-full bg-black bg-opacity-35"
					></div>
				</motion.div>
			) : null}
		</AnimatePresence>
	);
};

export default MobileNav;
