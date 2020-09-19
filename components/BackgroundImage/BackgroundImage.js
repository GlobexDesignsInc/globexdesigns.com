// @flow strict

import React, {type Element, memo, type Node} from 'react';
import classnames from 'classnames';
import ProgressiveImage from 'react-progressive-image';
import styles from './BackgroundImage.module.css';

type PropsType = {
	children?: Node,
	height: number,
	placeholder: string,
	src: string,
};

export const BackgroundImage = ({
	children,
	height,
	placeholder,
	src,
}: PropsType): Element<typeof ProgressiveImage> => {
	const placeholderUrl = `/${placeholder}`;

	return (
		<ProgressiveImage
			placeholder={placeholderUrl}
			src={`/${src}`}>
			{(
				src: string,
				loading: boolean
			): Element<'div'> => {
				const classes = classnames(
					styles.img,
					styles.imgHigh
				);

				const classesInner = classnames(
					styles.img,
					styles.imgLow,
					loading ? styles.imgLowLoading : null
				);

				const style = {
					backgroundImage: !loading ? `url(${src})` : null,
					height,
				};

				const styleInner = {
					backgroundImage: `url(${placeholderUrl})`,
					height,
				};

				return (
					<div className={classes} style={style}>
						<div className={classesInner} style={styleInner} />
						<div className={styles.children}>
							{children}
						</div>
					</div>
				);
			}}
		</ProgressiveImage>
	);
};

export default memo<PropsType>(BackgroundImage);
