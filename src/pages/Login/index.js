import React from 'react';
import { loginBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';


const Login = () => {
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
                <Button title="Log In" />
                <Gap height={150} />
                <Link title="Sign Up!" />
            </div>
        </div>
    )
}

export default Login
