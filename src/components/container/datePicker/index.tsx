import { useRef } from "react";

const DatePicker = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const showCalendar = () => {
		inputRef.current?.focus();
	};
	return (
		<div className="flex py-[18px] px-4 border-b border-[#E8E8E8] justify-between">
			<span className="text-[#555] text-xs">What is your date of birth?</span>
			<div className="cursor-pointer">
				<img
					onClick={() => showCalendar()}
					src="/assets/icons/calendar.svg"
					alt=""
				/>
				<input
					ref={inputRef}
					className="hidden"
					type="date"
					name="date-picker"
				/>
			</div>
		</div>
	);
};

export default DatePicker;
