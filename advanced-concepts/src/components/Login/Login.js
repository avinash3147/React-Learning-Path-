import Card from '../UI/Card/Card';
import './Login.css'

const Login = (props) => {
    return (
        <Card>
            <form>
                <div className='login'>
                    <div className='form-control'>
                        <label>Email</label>
                        <input type='mail' />
                    </div>
                    <div className='form-control'>
                        <label>Password</label>
                        <input type='password' />
                    </div>
                </div>            
            <button type='submit'>Login</button>
        </form>

        </Card>
        
    )
}

export default Login;