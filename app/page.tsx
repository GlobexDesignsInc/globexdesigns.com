'use client';

import { Element as ScrollElement } from 'react-scroll';
import About from '../components/About/About';
import CompanyMap from '../components/CompanyMap/CompanyMap';
import Contact from '../components/Contact/Contact';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import Passions from '../components/Passions/Passions';
import Projects from '../components/Projects/Projects';
import Services from '../components/Services/Services';

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
		<CompanyMap />
	</>
);

export default Index;
