import { motion, useMotionValue } from "framer-motion";
import Card from "./Card";
import { useState } from "react";

const cards = Array.from({ length: 6 });

const CardSlider = () => {
	const [dragging, setDragging] = useState(false);
	const [cardIndex, setCardIndex] = useState(1);

	const DRAG_BUFFER = 50;

	const dragX = useMotionValue(0);

	const onDragStart = () => {
		setDragging(true);
		console.log(dragging);
	};

	const onDragEnd = () => {
		setDragging(false);

		const x = dragX.get();
		console.log(x);

		if (x <= -DRAG_BUFFER && cardIndex < cards.length - 1) {
			setCardIndex((prev) => prev + 1);
		} else if (x >= DRAG_BUFFER && cardIndex > 0) {
			setCardIndex((prev) => prev - 1);
		}
	};

	return (
		<div className="overflow-hidden mt-14">
			<motion.div
				drag="x"
				dragConstraints={{
					left: 0,
					right: 0,
				}}
				onDragStart={onDragStart}
				onDragEnd={onDragEnd}
				animate={{
					translateX: `-${cardIndex * 64}%`,
				}}
				style={{ x: dragX }}
				className="w-full flex justify-start items-center gap-x-5 cursor-grab active:cursor-grabbing px-5"
			>
				{cards.map((_, i) => (
					<Card key={i} />
				))}
			</motion.div>
		</div>
	);
};

export default CardSlider;
