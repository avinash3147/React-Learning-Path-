import UserDetail from '../UserDetail/UserDetail';
import './UserDetails.css';

const UserDetails = (props) => {

    let content = <p className='empty-details'>No UserDetails Found!!!</p>

    if (props.items.length > 0) {
        content = (
            props.items.map((userData) => {
                return (
                    <UserDetail
                        key={userData.id}
                        id={userData.id}
                        deleteUserDetail={props.deleteUserDetail}
                    >
                        {userData.userName} ( {userData.age} years old)
                    </UserDetail>
                )
            })
        )
    }

    return (
        <ul className='user-details-list'>
            {
                content
            }
        </ul>
    )
}

export default UserDetails;