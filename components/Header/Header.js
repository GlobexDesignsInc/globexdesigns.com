// @flow

import React, {type Element, PureComponent} from 'react';
import classnames from 'classnames';
import Nav from './../Nav';
import styles from './Header.css';

type PropsType = {};

type StateType = {
	isScrolled: boolean,
};

export default class Header extends PureComponent<PropsType, StateType> {
	static displayName = 'Header';

	state = {
		isScrolled: Boolean(typeof window !== 'undefined' && window.scrollY > 0),
	};

	componentDidMount () {
		window.addEventListener('scroll', this._handleScroll);
	}

	componentWillUnmount () {
		window.removeEventListener('scroll', this._handleScroll);
	}

	render (): Element<'div'> {
		const {isScrolled} = this.state;

		const classes = classnames(
			styles.main,
			isScrolled ? styles.isScrolled : null
		);

		return (
			<div className={classes}>
				<div className={styles.inner}>
					<img
						alt='Globex Designs, Inc.'
						src='/static/logo.png' />
					<Nav />
				</div>
			</div>
		);
	}

	_handleScroll = () => {
		this.setState({
			isScrolled: Boolean(typeof window !== 'undefined' && window.scrollY > 0),
		});
	};
}
