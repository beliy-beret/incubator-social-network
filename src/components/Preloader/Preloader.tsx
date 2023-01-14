import spinner from '../../assets/images/spinner.gif';
import s from './style.module.css';

export const Preloader = () => {
	return (
		<div className={s.preloader}>
			<img src={spinner} alt="preloader" />
		</div>
	);
};