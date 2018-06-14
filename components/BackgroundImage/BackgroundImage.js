// @flow

import React, {type Element, type Node, PureComponent} from 'react';
import classnames from 'classnames';
import ProgressiveImage from 'react-progressive-image';
import styles from './BackgroundImage.css';

type PropsType = {
	children: Node,
	height: number,
	placeholder: string,
	src: string,
};

export default class BakgroundImage extends PureComponent<PropsType> {
	static displayName = 'BakgroundImage';

	render (): Element<typeof ProgressiveImage> {
		const {
			children,
			height,
			placeholder,
			src,
		} = this.props;

		const placeholderUrl = `/static/${placeholder}`;

		return (
			<ProgressiveImage
				placeholder={placeholderUrl}
				src={`/static/${src}`}>
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
	}
}
