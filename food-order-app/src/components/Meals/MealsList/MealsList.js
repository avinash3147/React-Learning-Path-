import mealsData from './MealsData'
import classes from './MealsList.module.css'

const MealsList = (props) => {

    const mealsList = mealsData.map((meal) => {
        return <li>{meal.name}</li>
    })

    return (
        <section className={classes['meals-list']}>
            <ul>
                {mealsList}
            </ul>
        </section>
    )
}

export default MealsList;