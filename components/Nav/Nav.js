// @flow strict

import React, {type Element} from 'react';
import {Link} from 'react-scroll';
import styles from './Nav.module.css';

type LinkType = {
	name: string,
	to: string,
};

const LINKS = [{
	name: 'Home',
	to: 'home',
}, {
	name: 'About',
	to: 'about',
}, {
	name: 'Services',
	to: 'services',
}, {
	name: 'Contact',
	to: 'contact',
}];

export const Nav = (): Element<'nav'> => (
	<nav className={styles.main}>
		{LINKS.map((link: LinkType): Element<typeof Link> => (
			<Link
				activeClass={styles.linkActive}
				className={styles.link}
				key={link.to}
				offset={-128}
				smooth={true}
				spy={true}
				to={link.to}>
				{link.name}
			</Link>
		))}
	</nav>
);

export default Nav;
