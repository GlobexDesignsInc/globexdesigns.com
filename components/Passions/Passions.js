// @flow strict

import React, {type Element, Fragment} from 'react';
import Icon from '../Icon';
import styles from './Passions.module.css';
import TwoPaneRow from '../TwoPaneRow';

export const Passions = (): Element<typeof TwoPaneRow> => (
	<TwoPaneRow
		left={(
			<>
				<Icon color='blue' name='design' />
				<h2 className={styles.h2}>Design</h2>
				<p className={styles.text}>Our creative design team enjoys challenges and strives for simplicity, visual elegance and ease-of-use.</p>
			</>
		)}
		right={(
			<>
				<Icon color='green' name='technology' />
				<h2 className={styles.h2}>Technology</h2>
				<p className={styles.text}>We ♥ technology and take great pride in delivering solutions that are secure, scalable and <em>blazing</em> fast!</p>
			</>
		)} />
);

export default Passions;
