// @flow strict

import React, {type Element, type Node} from 'react';
import Image from 'next/image';
import styles from './BackgroundImage.module.css';

type PropsType = {
	children?: Node,
	priority?: boolean,
	src: string,
};

export const BackgroundImage = ({
	children,
	priority = false,
	src,
}: PropsType): Element<'div'> => (
	<div className={styles.main}>
		<Image
			layout='fill'
			objectFit='cover'
			priority={priority}
			src={src} />
		<div className={styles.children}>
			{children}
		</div>
	</div>
);

export default BackgroundImage;
