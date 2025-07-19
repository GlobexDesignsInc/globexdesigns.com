'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import styles from './Header.module.css';

export const Header = () => {
	const [isScrolled, setIsScrolled] = useState(
		Boolean(typeof window !== 'undefined' && window.scrollY > 0),
	);

	useEffect(() => {
		const _handleScroll = () =>
			setIsScrolled(
				Boolean(typeof window !== 'undefined' && window.scrollY > 0),
			);

		window.addEventListener('scroll', _handleScroll);

		return () => {
			window.removeEventListener('scroll', _handleScroll);
		};
	});

	const classes = clsx(styles.main, isScrolled ? styles.isScrolled : null);

	return (
		<div className={classes}>
			<div className={styles.inner}>
				<Logo className={styles.logo} />
				<Nav />
			</div>
		</div>
	);
};

export default Header;
