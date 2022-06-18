import './UserDetail.css';

const UserDetail = (props) => {

    const deleteHandler = () => {
        props.deleteUserDetail(props.id)
    }

    return (
        <li className='user-detail' onClick={deleteHandler}>
            {props.children}
        </li>
    )
}

export default UserDetail;