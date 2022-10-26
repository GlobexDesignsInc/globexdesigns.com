import clsx from 'clsx';
import React from 'react';
import styles from './CenteredContent.module.css';

type PropsType = {
	children: React.ReactNode,
	className?: string | null,
};

export const CenteredContent = ({
	children,
	className,
}: PropsType) => {
	const classes = clsx(
		styles.main,
		className
	);

	return (
		<div className={classes}>
			{children}
		</div>
	);
};

export default CenteredContent;
