import {useState} from 'react';

import UserDetailsForm from "./components/Users/UserDetailsForm/UserDetailsForm";
import './App.css'
import UserDetails from './components/Users/UserDetails/UserDetials';

function App() {

  const [userDetails, setUserDetails] = useState([])

  const addUserDetails = (data) => {
    setUserDetails((prevState) => {
      return [...prevState, data]
    })
    console.log(userDetails);
  }

  const deleteUserDetail = (id) => {
    setUserDetails((prevState) => {
      const updatedUserDetails = prevState.filter((data) => data.id != id);
      return updatedUserDetails
    })
  }

  return (
    <>
      <section className='user-details-form'>
        <UserDetailsForm addUserDetails={addUserDetails} />
      </section>
      <section className='user-details'>
        <UserDetails items={userDetails} deleteUserDetail={deleteUserDetail}/>
      </section>
    </>
  );
}

export default App;
