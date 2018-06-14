// @flow

import React, {type Element, type Node, PureComponent} from 'react';
import classnames from 'classnames';
import styles from './CenteredContent.css';

type PropsType = {
	children: Node,
	className?: ?string,
};

export default class CenteredContent extends PureComponent<PropsType> {
	static displayName = 'CenteredContent';

	render (): Element<'div'> {
		const {children, className} = this.props;

		const classes = classnames(
			styles.main,
			className
		);

		return (
			<div className={classes}>
				{children}
			</div>
		);
	}
}
