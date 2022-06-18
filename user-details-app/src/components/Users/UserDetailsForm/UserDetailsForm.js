import {useState} from 'react';

import './UserDetailsForm.css';

const UserDetailsForm = (props) => {

    const [userDetail, setUserDetail] = useState({})
    const [isValid, setIsValid] = useState(true)

    const addUsername = (event) => {
        setUserDetail((prevUserDetails) => {
            return {...prevUserDetails, userName: event.target.value}
        })
        // if (userDetail.userName.trim().length > 0) {
        //     setIsValid(true)
        // }
    }

    const addAge = (event) => {
        setUserDetail((prevUserDetails) => {
            return {...prevUserDetails, age: event.target.value}
        })
        // if (userDetail.age.trim().length > 0) {
        //     setIsValid(true)
        // }
    }

    const submitHandler = (event) => {
        event.preventDefault()

        if ((userDetail.userName === '') && (userDetail.age === '')) {
            setIsValid(false);
            return
        }

        const data = {
            userName: userDetail.userName,
            age: userDetail.age,
            id: Math.random().toString()
        }

        console.log("From UserDetailsForm ", data);
        props.addUserDetails(data);

    }

    return (
        <form onSubmit={submitHandler}>
            <div className='form-controls'>
                <div className='form-control'>
                    <label>Username</label>
                    <input type='text' onChange={addUsername} />
                </div>
                <div className='form-control'>
                    <label>Age (Years)</label>
                    <input type='text' onChange={addAge} />
                </div>
                <button type='submit'>Add User</button>
            </div>
        </form>
    )
}

export default UserDetailsForm;