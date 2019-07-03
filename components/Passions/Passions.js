// @flow strict

import React, {type Element, Fragment, memo} from 'react';
import Icon from '../Icon';
import styles from './Passions.css';
import TwoPaneRow from '../TwoPaneRow';

export const Passions = (): Element<typeof TwoPaneRow> => (
	<TwoPaneRow
		left={(
			<Fragment>
				<Icon color='blue' name='design' />
				<h2 className={styles.h2}>Design</h2>
				<p className={styles.text}>Our creative design team enjoys challenges and strives for simplicity, visual elegance and ease-of-use.</p>
			</Fragment>
		)}
		right={(
			<Fragment>
				<Icon color='green' name='technology' />
				<h2 className={styles.h2}>Technology</h2>
				<p className={styles.text}>We ♥ technology and take great pride in delivering solutions that are secure, scalable and <em>blazing</em> fast!</p>
			</Fragment>
		)} />
);

Passions.displayName = 'Passions';

export default memo<{||}>(Passions);
