import { BsLinkedin, BsFacebook } from 'react-icons/bs';

import ThemeSwitch from "./ThemeSwitch";

const Footer = () => (
    <footer className="d-flex justify-content-between p-3">
        <div className="d-flex gap-2">
            <span>Developed by Efi Sabo</span>
            <a href="https://www.linkedin.com/in/efi-sabo-236b5065" target="_blank" rel="noreferrer">
                <BsLinkedin/> LinkedIn
            </a>
            <a href="https://www.facebook.com/efisabo?mibextid=ZbWKwL" target="_blank" rel="noreferrer">
                <BsFacebook/> Facebook
            </a>
        </div>
        <ThemeSwitch />
    </footer>
);

export default Footer;