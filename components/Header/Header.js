// @flow strict

import React, {type Element, memo, useEffect, useState} from 'react';
import classnames from 'classnames';
import Nav from '../Nav';
import styles from './Header.css';

export const Header = (): Element<'div'> => {
	const [isScrolled, setIsScrolled] = useState(
		Boolean(typeof window !== 'undefined' && window.scrollY > 0)
	);

	useEffect((): any => {
		const _handleScroll = (): any => setIsScrolled(
			Boolean(typeof window !== 'undefined' && window.scrollY > 0)
		);

		window.addEventListener('scroll', _handleScroll);

		return () => {
			window.removeEventListener('scroll', _handleScroll);
		};
	});

	const classes = classnames(
		styles.main,
		isScrolled ? styles.isScrolled : null
	);

	return (
		<div className={classes}>
			<div className={styles.inner}>
				<img
					alt='Globex Designs, Inc.'
					className={styles.logo}
					src='/static/logo.png' />
				<Nav />
			</div>
		</div>
	);
};

Header.displayName = 'Header';

export default memo<{||}>(Header);
