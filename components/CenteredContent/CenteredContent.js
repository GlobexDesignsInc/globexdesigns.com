// @flow strict

import React, {type Element, memo, type Node} from 'react';
import classnames from 'classnames';
import styles from './CenteredContent.module.css';

type PropsType = {
	children: Node,
	className?: ?string,
};

export const CenteredContent = ({
	children,
	className,
}: PropsType): Element<'div'> => {
	const classes = classnames(
		styles.main,
		className
	);

	return (
		<div className={classes}>
			{children}
		</div>
	);
};

CenteredContent.displayName = 'CenteredContent';

export default memo<PropsType>(CenteredContent);
