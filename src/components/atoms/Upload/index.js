import React from 'react'
import { loginBg } from '../../../assets'
import './upload.scss'

const Upload = () => {
    return (
        <div className="upload">
            <img className="preview" src={loginBg} alt="preview" />
            <input type="file" />
        </div>
    )
}

export default Upload
