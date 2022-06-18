import {useState} from 'react';

import './CourseForm.css'

const CourseForm = (props) => {

    const [goalName, setGoalName] = useState('')
    const [isValid, setIsValid] = useState(true)

    const changeHandler = (event) => {
        if (goalName.trim().length > 0) {
            setIsValid(true)
        }
        setGoalName(event.target.value)
    }

    const submitHanlder = (event) => {
        event.preventDefault();
        if (goalName.trim().length === 0) {
            setIsValid(false)
            return
        }
        props.addCourseGoal(goalName)
        setGoalName('')
    }

    return (
        <form onSubmit={submitHanlder}>
            <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
                <label>Course Goal</label>
                <input type='text' value={goalName} onChange={changeHandler} />
                {!isValid && <div > {"errorMessage"} </div>}
            </div>
            <button type='submit'>Add Goal</button>
        </form>
    )
}

export default CourseForm;