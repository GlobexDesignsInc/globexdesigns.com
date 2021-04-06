// @flow strict

/* eslint-disable react/jsx-props-no-spreading */

import React, {type AbstractComponent, type Element, type Node} from 'react';
import classnames from 'classnames';
import {ScrollLink} from 'react-scroll';
import styles from './Button.module.css';

type PropsType = {
	+children?: Node,
	+className?: ?string,
	+offset?: number,
	+smooth?: boolean,
	+to: string,
};

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
			{children}
		</button>
	);
};

export default (ScrollLink(Button): AbstractComponent<PropsType>);
