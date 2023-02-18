'use client';

import About from '../components/About';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Home from '../components/Home';
import Map from '../components/Map';
import Passions from '../components/Passions';
import Projects from '../components/Projects';
import React from 'react';
import {Element as ScrollElement} from 'react-scroll';
import Services from '../components/Services';

const Index = () => (
	<>
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
	</>
);

export default Index;
