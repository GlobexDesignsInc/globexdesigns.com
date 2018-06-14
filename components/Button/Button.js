// @flow

import React, {type Element, type Node, PureComponent} from 'react';
import classnames from 'classnames';
import {ScrollLink} from 'react-scroll';
import styles from './Button.css';

type PropsType = {
	children?: Node,
	className?: ?string,
	to: string,
};

export class Button extends PureComponent<PropsType> {
	static displayName = 'Button';

	render (): Element<'button'> {
		const {children, className, ...other} = this.props;

		const classes = classnames(
			styles.main,
			className
		);

		return (
			<button className={classes} {...other}>
				<span className={styles.text}>
					{children}
				</span>
			</button>
		);
	}
}

export default ScrollLink(Button);
