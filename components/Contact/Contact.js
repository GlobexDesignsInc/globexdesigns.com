// @flow

import React, {type Element, PureComponent} from 'react';
import styles from './Contact.css';
import TwoPaneRow from './../TwoPaneRow';

type PropsType = {};

export default class Contact extends PureComponent<PropsType> {
	static displayName = 'Contact';

	render (): Element<typeof TwoPaneRow> {
		return (
			<TwoPaneRow
				left={(
					<div className={styles.left}>
						<h2 className={styles.h2}>Contact Us</h2>
						<p className={styles.text}>We’re excited to find out how we can help you. Please use the info to the right to find out how to get in touch with us and we’ll get back to you as soon as we can.</p>
					</div>
				)}
				right={(
					<div className={styles.right}>
						<a
							className={styles.phone}
							href='tel:1-778-807-0755'>
							1-778-807-0755
						</a><br />
						<a
							className={styles.email}
							href='mailto:info@globexdesigns.com'>
							info@globexdesigns.com
						</a><br />
						<address className={styles.address}>
							<strong className={styles.mailing}>
								Mailing Address:
							</strong><br />
							621-7008 River Pky.<br />
							Richmond, BC, V6X 0R1<br />
							Canada
						</address>
					</div>
				)} />
		);
	}
}
