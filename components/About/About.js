// @flow

import React, {type Element, PureComponent} from 'react';
import BackgroundImage from './../BackgroundImage';
import Button from './../Button';
import CenteredContent from './../CenteredContent';
import styles from './About.css';

type PropsType = {};

export default class About extends PureComponent<PropsType> {
	static displayName = 'About';

	render (): Element<typeof BackgroundImage> {
		return (
			<BackgroundImage
				height={960}
				placeholder='about_small.jpg'
				src='about.jpg'>
				<CenteredContent className={styles.main}>
					<h2 className={styles.h2}>
						About Us
					</h2>
					<p className={styles.text}>Globex Designs, Inc. is a web & media design agency located in Vancouver, Canada. We&apos;ve been providing web, graphic and media services for nearly 20 years. Our goal has always been to set new standards for others to follow, and not to simply keep up with the current trends. We strive to provide creative designs for all our clients, and use the uniqueness of each project to its full innovative potential. At Globex Designs we accumulate the skills and dedication of designers, developers and technology experts from all over the world allowing us to challenge the boundaries of the web platform.<br /><br />We’d love to chat with you about your next project!</p>
					<Button offset={-128} smooth={true} to='services'>
						See Our Services
					</Button>
				</CenteredContent>
			</BackgroundImage>
		);
	}
}
