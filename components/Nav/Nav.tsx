import {Link} from 'react-scroll';
import React from 'react';
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

export const Nav = () => (
	<nav className={styles.main}>
		{LINKS.map((link: LinkType) => (
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
