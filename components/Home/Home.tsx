import image from '../../public/home.jpg';
import BackgroundImage from '../BackgroundImage/BackgroundImage';
import Button from '../Button/Button';
import CenteredContent from '../CenteredContent/CenteredContent';
import styles from './Home.module.css';

export const Home = () => (
	<BackgroundImage alt='Home' image={image} isPriority={true}>
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

export default Home;
