const Transactions = () => {
	const transactions = [1, 2, 3, 4, 5];
	return (
		<div className="mt-16">
			<div className="flex justify-between">
				<h3 className="font-cabinet text-xl font-medium tracking-[-0.48px] text-[#333A45]">
					Latest transactions
				</h3>
				<img
					src="/assets/icons/chevron-right.svg"
					alt=""
				/>
			</div>
			<div className="mt-[50px] flex flex-col gap-y-7">
				{transactions.map(() => (
					<div className="flex justify-between">
						<div className="flex items-center">
							<img
								src="/public/assets/images/user-profile2.png"
								alt=""
							/>
							<div className="font-cabinet ml-3">
								<p className="text-[#53627A]">Aghedo Jason</p>
								<p className="text-[#657795] text-xs">Transfer other account</p>
							</div>
						</div>
						<p className="self-end font-bold text-[#E94470] my-auto">-25$</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Transactions;
