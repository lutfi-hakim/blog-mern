import React from 'react';
import { useHistory } from 'react-router-dom';
import { loginBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';


const Login = () => {
    const history = useHistory();
    return (
        <div className="main-pages">
            <div className="left">
                <img src={loginBg} className="bg-image" alt="imgBg" />
            </div>
            <div className="right">
                <p className="title">Log In</p>
                <Input label="Email" placeholder="Email" />
                <Gap height={18} />
                <Input label="Password" placeholder="Password" />
                <Gap height={40} />
                <Button title="Log In" onClick={() => history.push('/')} />
                <Gap height={150} />
                <Link title="Sign Up!" onClick={() => history.push('/register')} />
            </div>
        </div>
    )
}

export default Login
