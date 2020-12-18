import React from 'react';
import { registerBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import "./register.scss";

const Register = () => {
    return (
        <div className="main-pages">
            <div className="left">
                <img src={registerBg} className="bg-image" alt="imgBg" />
            </div>
            <div className="right">
                <p className="title">Register</p>
                <Input label="Full Name" placeholder="Full Name" />
                <Gap height={18} />
                <Input label="Email" placeholder="Email" />
                <Gap height={18} />
                <Input label="Password" placeholder="Password" />
                <Gap height={40} />
                <Button title="Register" />
                <Gap height={150} />
                <Link title="Back to Login" />
            </div>
        </div>
    )
}

export default Register
