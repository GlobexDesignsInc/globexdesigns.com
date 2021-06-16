// @flow strict

import React, {type Element, Fragment} from 'react';
import Image from 'next/image';
import projectsImage from '../../public/projects.png';
import styles from './Projects.module.css';
import TwoPaneRow from '../TwoPaneRow';

export const Projects = (): Element<typeof TwoPaneRow> => (
	<TwoPaneRow
		left={(
			<Fragment>
				<h2 className={styles.h2}>Our Work</h2>
				<p className={styles.text}>We have over 100 projects in our portfolio and many happy clients from all over the world.</p>
			</Fragment>
		)}
		right={(
			<Image
				alt='Globex Designs Projects'
				className={styles.img}
				height='245'
				placeholder='blur'
				src={projectsImage}
				width='512' />
		)} />
);

export default Projects;
