import './Navigation.css'

const Navigation = (props) => {
    return (
        <nav className='nav'>
            <ul>
                <li><a href='/'>Users</a></li>
                <li><a href='/'>Admin</a></li>
                <li><button>Logout</button></li>
            </ul>
        </nav>
    )
}

export default Navigation;