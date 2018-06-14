// @flow

import React, {type Element, PureComponent} from 'react';
import BackgroundImage from './../BackgroundImage';
import Button from './../Button';
import CenteredContent from './../CenteredContent';
import styles from './Home.css';

type PropsType = {};

export default class Home extends PureComponent<PropsType> {
	static displayName = 'Home';

	render (): Element<typeof BackgroundImage> {
		return (
			<BackgroundImage
				height={960}
				placeholder='home_small.jpg'
				src='home.jpg'>
				<CenteredContent className={styles.main}>
					<h1 className={styles.h1}>
						<span className={styles.one}>We are a</span>
						<span className={styles.two}>Digital Creative Agency</span>
						<span className={styles.three}>with a passion for technology</span>
					</h1>
					<Button offset={-128} smooth={true} to='about'>
						Learn More
					</Button>
				</CenteredContent>
			</BackgroundImage>
		);
	}
}
