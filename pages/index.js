// @flow

// Temporarily here due to:
// https://github.com/zeit/next-plugins/issues/149
import './_document.css';
import React, {type Element, Fragment, PureComponent} from 'react';
import About from './../components/About';
import Contact from './../components/Contact';
import Header from './../components/Header';
import Home from './../components/Home';
import Map from './../components/Map';
import Passions from './../components/Passions';
import Projects from './../components/Projects';
import {Element as ScrollElement} from 'react-scroll';
import Services from './../components/Services';

type PropsType = {};

export default class Index extends PureComponent<PropsType> {
	static displayName = 'Index';

	render (): Element<typeof Fragment> {
		return (
			<Fragment>
				<Header />
				<ScrollElement name='home'>
					<Home />
				</ScrollElement>
				<Passions />
				<ScrollElement name='about'>
					<About />
				</ScrollElement>
				<Projects />
				<ScrollElement name='services'>
					<Services />
				</ScrollElement>
				<ScrollElement name='contact'>
					<Contact />
				</ScrollElement>
				<Map />
			</Fragment>
		);
	}
}
