import React from 'react';
import MealsList from './MealsList/MealsList';
import MealsSummary from './MealsSummary/MealsSummary';

const Meals = () => {
    return (
        <React.Fragment>
            <MealsSummary />
            <MealsList />
        </React.Fragment>
    )
}

export default Meals;