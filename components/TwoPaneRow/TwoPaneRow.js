// @flow strict

import React, {type Element, memo, type Node} from 'react';
import CenteredContent from '../CenteredContent';
import styles from './TwoPaneRow.module.css';

type PropsType = {
	left: Node,
	right: Node,
};

export const TwoPaneRow = ({
	left,
	right,
}: PropsType): Element<'div'> => (
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

export default memo<PropsType>(TwoPaneRow);
