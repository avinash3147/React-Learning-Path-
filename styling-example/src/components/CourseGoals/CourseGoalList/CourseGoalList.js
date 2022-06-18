import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css'

const CourseGoalList = (props) => {
    return (
        <ul className="goal-list">
            {
                props.items.map((goal) => {
                    return (
                        <CourseGoalItem 
                            key={goal.id} 
                            deleteGoal={props.deleteGoal}
                            id={goal.id}
                        >
                                {goal.text}
                        </CourseGoalItem>
                    )
                })
            }
        </ul>
    )
}

export default CourseGoalList;