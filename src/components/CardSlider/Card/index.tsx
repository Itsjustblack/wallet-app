const Card = () => {
	return (
		<div className="relative w-[264px] shrink-0 h-[152px] bg-slate-800 rounded-lg bg-gradient-to-b from-[#7d80c780] to-[#bed1fc99] overflow-hidden">
			<img
				className="absolute w-full top-0 object-cover"
				src="/assets/icons/card-top.svg"
				alt=""
			/>
			<img
				className="absolute w-full bottom-0 object-cover"
				src="/assets/icons/card-bottom.svg"
				alt=""
			/>
			<div className="w-full h-full flex flex-col justify-between text-white font-inter text-xs py-4 px-[14px] relative z-10">
				<div className="flex justify-between">
					<span className="font-medium">Credit</span>
					<img
						src="/assets/icons/visa.svg"
						alt=""
					/>
				</div>
				<div className="flex items-center gap-x-2 font-medium">
					{"xxxx.xxxx.xxxx.5678".split(".").map((item, i) => (
						<div key={i}>{item}</div>
					))}
				</div>
				<div className="flex gap-x-6">
					<div>
						<span className="text-[5px]">Card Holder</span>
						<p>Sanna Lee</p>
					</div>
					<div>
						<span className="text-[5px]">Expires</span>
						<p>03/24</p>
					</div>
					<div>
						<span className="text-[5px]">CVV</span>
						<p>xx5</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
