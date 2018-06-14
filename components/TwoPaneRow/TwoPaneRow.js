// @flow

import React, {type Element, type Node, PureComponent} from 'react';
import CenteredContent from './../CenteredContent';
import styles from './TwoPaneRow.css';

type PropsType = {
	left: Node,
	right: Node,
};

export default class TwoPaneRow extends PureComponent<PropsType> {
	static displayName = 'TwoPaneRow';

	render (): Element<'div'> {
		const {left, right} = this.props;

		return (
			<div className={styles.main}>
				<CenteredContent className={styles.center}>
					<div className={styles.left}>
						{left}
					</div>
					<div className={styles.right}>
						{right}
					</div>
				</CenteredContent>
			</div>
		);
	}
}
