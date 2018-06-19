// @flow

import React, {type Element, PureComponent} from 'react';
import {Link} from 'react-scroll';
import styles from './Nav.css';

type PropsType = {};

type LinkType = {
	name: string,
	to: string,
};

export default class Nav extends PureComponent<PropsType> {
	static displayName = 'Nav';

	render (): Element<'nav'> {
		const links = [{
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

		return (
			<nav className={styles.main}>
				{links.map(this._renderLink)}
			</nav>
		);
	}

	_renderLink = (
		link: LinkType
	): Element<typeof Link> => {
		return (
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
		);
	};
}
