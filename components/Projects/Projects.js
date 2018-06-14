// @flow

import React, {type Element, Fragment, PureComponent} from 'react';
import styles from './Projects.css';
import TwoPaneRow from './../TwoPaneRow';

type PropsType = {};

export default class Projects extends PureComponent<PropsType> {
	static displayName = 'Projects';

	render (): Element<typeof TwoPaneRow> {
		return (
			<TwoPaneRow
				left={(
					<Fragment>
						<h2 className={styles.h2}>Our Work</h2>
						<p className={styles.text}>We have over 100 projects in our portfolio and many happy clients for all over the world.</p>
					</Fragment>
				)}
				right={(
					<img
						alt='Globex Designs Projects'
						src='/static/projects.png' />
				)} />
		);
	}
}
