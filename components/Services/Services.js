// @flow strict

import React, {type Element} from 'react';
import BackgroundImage from '../BackgroundImage';
import Button from '../Button';
import CenteredContent from '../CenteredContent';
import Icon from '../Icon';
import styles from './Services.module.css';

export const Services = (): Element<typeof BackgroundImage> => (
	<BackgroundImage
		height={960}
		placeholder='services_small.jpg'
		src='services.jpg'>
		<CenteredContent className={styles.main}>
			<h2 className={styles.h2}>
				Our Services
			</h2>
			<div className={styles.icons}>
				<Icon color='yellow' name='design' />
				<Icon color='orange' name='web' />
				<Icon color='red' name='identity' />
				<Icon color='blue' name='dev' />
				<Icon color='green' name='music' />
			</div>
			<p className={styles.text}>We offer a wide range of services. Our primary expertise lies in <strong>graphic design</strong> and <strong>web development</strong>. Whether you are completely redesigning your business or starting a brand new website, we can get you started with our web design packages. Our talented designers also offer <strong>identity & brand design</strong> packages if you’re looking for a new logo, print materials or business cards. For more technically involved projects, we also offer a range of <strong>software and app development</strong> services which are ideal for customers looking to upgrade their infrastuctures or develop a new application. Finally, we also offer <strong>music production</strong> and composition services for those looking to add a bit of sound flavor to their work. In the past we’re produced music for advertisements, as well as video games.</p>
			<Button offset={-128} smooth={true} to='contact'>
				Let&apos;s Chat!
			</Button>
		</CenteredContent>
	</BackgroundImage>
);

Services.displayName = 'Services';

export default Services;
