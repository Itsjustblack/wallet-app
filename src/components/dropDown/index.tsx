import { defaultEase } from "../../utils/framer-default-animations";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const DropDown = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="text-[#555] focus:outline-none text-xs text-center inline-flex items-center justify-between w-full py-[18px] px-4 border-b border-[#E8E8E8]"
				type="button"
			>
				Select your gender
				<img
					src="/assets/icons/chevron-down.svg"
					alt=""
				/>
			</button>
			<AnimatePresence>
				{isOpen ? (
					<motion.div
						key="dropdown"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3, ease: defaultEase }}
						className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full mt-3"
					>
						<ul
							className="my-2 text-sm text-gray-700"
							aria-labelledby="dropdownDefaultButton"
						>
							<li>
								<a className="block cursor-pointer px-4 py-2 hover:bg-gray-100">
									Male
								</a>
							</li>
							<li>
								<a className="block cursor-pointer px-4 py-2 hover:bg-gray-100">
									Female
								</a>
							</li>
						</ul>
					</motion.div>
				) : null}
			</AnimatePresence>
		</div>
	);
};

export default DropDown;
