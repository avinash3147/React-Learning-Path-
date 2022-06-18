import {useState} from 'react'

import CourseForm from "./components/CourseGoals/CourseForm/CourseForm";
import './App.css';
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';

function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  const addCourseGoal = (courseGoal) => {
    setCourseGoals((prevCourseGoal) => {
      const newGoal = [...prevCourseGoal];
      newGoal.unshift({text: courseGoal, id: Math.random().toString() });
      return newGoal
    })
  }

  const deleteGoal = (id) => {
    setCourseGoals((prevCourseGoal) => {
      const updatedGoals = prevCourseGoal.filter((goal) => goal.id != id);
      return updatedGoals
    })
  }

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  )

  if (courseGoals.length > 0) {
    content = <CourseGoalList items={courseGoals} deleteGoal={deleteGoal}/>
  }

  return (
    <>
      <section className='goal-form'>
        <CourseForm addCourseGoal={addCourseGoal} />
      </section>
      <section className='goals'>
        {content}
      </section>
    </>
  )
}

export default App;
