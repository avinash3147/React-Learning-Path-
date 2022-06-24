import mealsImage from '../../../assets/meals.jpg';
import classes from './Banner.module.css';

const Banner = () => {
    return (
        <section className={classes['main-image']}>
            <img src={mealsImage} alt='A table full of delicious food!!!' />
        </section>
    )
}

export default Banner;