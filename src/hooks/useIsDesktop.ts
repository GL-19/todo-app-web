import { useEffect, useState } from "react";

export function useIsDesktop(widthThreshold: number = 850): boolean {
	const [isDesktop, setIsDesktop] = useState(true);

	useEffect(() => {
		const updateMedia = () => {
			if (window.innerWidth > widthThreshold) {
				setIsDesktop(true);
			} else {
				setIsDesktop(false);
			}
		};

		window.addEventListener("resize", updateMedia);

		updateMedia();

		return () => window.removeEventListener("resize", updateMedia);
	}, [widthThreshold]);

	return isDesktop;
}
