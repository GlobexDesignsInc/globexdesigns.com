import Image from 'next/image';
import React from 'react';
import type {StaticImageData} from 'next/image';
import styles from './BackgroundImage.module.css';

type PropsType = {
	alt: string,
	children?: React.ReactNode,
	image: StaticImageData,
	priority?: boolean,
};

export const BackgroundImage = ({
	alt,
	children,
	image,
	priority = false,
}: PropsType) => (
	<div className={styles.main}>
		<Image
			alt={alt}
			className={styles.img}
			fill={true}
			priority={priority}
			src={image} />
		<div className={styles.children}>
			{children}
		</div>
	</div>
);

export default BackgroundImage;
