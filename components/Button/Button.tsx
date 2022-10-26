/* eslint-disable react/jsx-props-no-spreading */

import clsx from 'clsx';
import React from 'react';
import {ScrollLink} from 'react-scroll';
import styles from './Button.module.css';

type PropsType = {
	children?: React.ReactNode,
	className?: string | null,
	offset?: number,
	smooth?: boolean,
	to: string,
};

export const Button = ({
	children,
	className,
	...other
}: PropsType) => {
	const classes = clsx(
		styles.main,
		className
	);

	return (
		<button className={classes} {...other}>
			{children}
		</button>
	);
};

export default ScrollLink(Button);
