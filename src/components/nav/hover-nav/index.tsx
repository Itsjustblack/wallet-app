import { createPortal } from "react-dom";

const HoverNav = () => {
	return createPortal(
		<div className="fixed w-full bottom-4">
			<div className="flex w-[60%] mx-auto justify-around px-5 py-3 rounded-2xl glass">
				<img
					className="w-6 h-6 object-contain"
					src="/public/assets/icons/wallet.svg"
					alt=""
				/>
				<img
					className="w-6 h-6 object-contain"
					src="/public/assets/icons/profile.svg"
					alt=""
				/>
			</div>
		</div>,
		document.body
	);
};

export default HoverNav;
