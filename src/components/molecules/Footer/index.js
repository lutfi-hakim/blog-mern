import React from 'react'
import { logo, fbIcon, gitIcon, insIcon, linkIcon, telIcon, twIcon } from '../../../assets';
import "./footer.scss";

const Icon = ({ img }) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon" />
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footer-container">
                    <div>
                        <img className="logo" src={logo} alt="logo" />
                    </div>
                    <div className="social-wrapper">
                        <Icon img={twIcon} />
                        <Icon img={linkIcon} />
                        <Icon img={telIcon} />
                        <Icon img={fbIcon} />
                        <Icon img={gitIcon} />
                        <Icon img={insIcon} />
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="copyright-container">
                    <p>Copyright - 2020</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
