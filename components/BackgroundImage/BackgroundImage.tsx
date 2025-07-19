import Image, { type StaticImageData } from 'next/image';
import type React from 'react';
import styles from './BackgroundImage.module.css';

type PropsType = {
	alt: string;
	children?: React.ReactNode;
	image: StaticImageData;
	isPriority?: boolean;
};

export const BackgroundImage = ({
	alt,
	children,
	image,
	isPriority = false,
}: PropsType) => (
	<div className={styles.main}>
		<Image
			alt={alt}
			className={styles.img}
			fill={true}
			priority={isPriority}
			src={image}
		/>
		<div className={styles.children}>{children}</div>
	</div>
);

export default BackgroundImage;
