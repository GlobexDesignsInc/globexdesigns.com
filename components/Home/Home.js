// @flow strict

import React, {type Element, memo} from 'react';
import BackgroundImage from '../BackgroundImage';
import Button from '../Button';
import CenteredContent from '../CenteredContent';
import styles from './Home.css';

export const Home = (): Element<typeof BackgroundImage> => (
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

Home.displayName = 'Home';

export default memo<{||}>(Home);
