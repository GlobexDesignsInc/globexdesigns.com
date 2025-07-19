import Image from 'next/image';
import projectsImage from '../../public/projects.png';
import TwoPaneRow from '../TwoPaneRow/TwoPaneRow';
import styles from './Projects.module.css';

export const Projects = () => (
	<TwoPaneRow
		left={
			<>
				<h2 className={styles.h2}>Our Work</h2>
				<p className={styles.text}>
					We have over 100 projects in our portfolio and many happy clients from
					all over the world.
				</p>
			</>
		}
		right={
			<Image
				alt='Globex Designs Projects'
				className={styles.img}
				height='245'
				placeholder='blur'
				src={projectsImage}
				width='512'
			/>
		}
	/>
);

export default Projects;
