// @flow

import React, {type Element, memo, type Node} from 'react';
import classnames from 'classnames';
import {ScrollLink} from 'react-scroll';
import styles from './Button.css';

type PropsType = {|
	children?: Node,
	className?: ?string,
	offset?: number,
	smooth?: boolean,
	to: string,
|};

export const Button = ({
	children,
	className,
	...other
}: PropsType): Element<'button'> => {
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
};

Button.displayName = 'Button';

export default memo<PropsType>(ScrollLink(Button));
