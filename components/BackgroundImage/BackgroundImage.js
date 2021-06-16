// @flow strict

import React, {type Element, type Node} from 'react';
import Image from 'next/image';
import styles from './BackgroundImage.module.css';

type PropsType = {
	+alt: string,
	+children?: Node,
	+image: any,
	+priority?: boolean,
};

export const BackgroundImage = ({
	alt,
	children,
	image,
	priority = false,
}: PropsType): Element<'div'> => (
	<div className={styles.main}>
		<Image
			alt={alt}
			layout='fill'
			objectFit='cover'
			priority={priority}
			src={image} />
		<div className={styles.children}>
			{children}
		</div>
	</div>
);

export default BackgroundImage;
