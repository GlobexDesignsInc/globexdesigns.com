import type React from 'react';
import CenteredContent from '../CenteredContent/CenteredContent';
import styles from './TwoPaneRow.module.css';

type PropsType = {
	left: React.ReactNode;
	right: React.ReactNode;
};

export const TwoPaneRow = ({ left, right }: PropsType) => (
	<div className={styles.main}>
		<CenteredContent className={styles.center}>
			<div className={styles.left}>{left}</div>
			<div className={styles.right}>{right}</div>
		</CenteredContent>
	</div>
);

export default TwoPaneRow;
