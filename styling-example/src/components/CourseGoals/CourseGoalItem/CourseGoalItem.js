import './CourseGoalItem.css';

const CourseGoalItem = (props) => {

    const deleteHanlder = () => {
        props.deleteGoal(props.id)
    }

    return (
        <li className='goal-item' onClick={deleteHanlder}>
            {props.children}
        </li>
    )
}

export default CourseGoalItem;