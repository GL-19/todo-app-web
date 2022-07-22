import { useEffect, useState } from "react";

export function useMediaQuery(widthThreshold: number = 850): boolean {
	const [isBiggerThanThreshold, setBiggerThanThreshold] = useState(true);

	useEffect(() => {
		const updateMedia = () => {
			if (window.innerWidth > widthThreshold) {
				setBiggerThanThreshold(true);
			} else {
				setBiggerThanThreshold(false);
			}
		};

		window.addEventListener("resize", updateMedia);

		updateMedia();

		return () => window.removeEventListener("resize", updateMedia);
	}, [widthThreshold]);

	return isBiggerThanThreshold;
}
