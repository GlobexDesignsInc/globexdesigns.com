import Icon from '../Icon/Icon';
import TwoPaneRow from '../TwoPaneRow/TwoPaneRow';
import styles from './Passions.module.css';

export const Passions = () => (
	<TwoPaneRow
		left={
			<>
				<Icon color='blue' name='design' />
				<h2 className={styles.h2}>Design</h2>
				<p className={styles.text}>
					Our creative design team enjoys challenges and strives for simplicity,
					visual elegance and ease-of-use.
				</p>
			</>
		}
		right={
			<>
				<Icon color='green' name='technology' />
				<h2 className={styles.h2}>Technology</h2>
				<p className={styles.text}>
					We ♥ technology and take great pride in delivering solutions that are
					secure, scalable and <em>blazing</em> fast!
				</p>
			</>
		}
	/>
);

export default Passions;
