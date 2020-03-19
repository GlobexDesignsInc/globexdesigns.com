// @flow strict

import React, {type Element, useEffect, useState} from 'react';
import classnames from 'classnames';
import Logo from '../Logo';
import Nav from '../Nav';
import styles from './Header.module.css';

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
				<Logo className={styles.logo} />
				<Nav />
			</div>
		</div>
	);
};

Header.displayName = 'Header';

export default Header;
