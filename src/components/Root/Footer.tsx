import ThemeSwitch from "./ThemeSwitch";

const Footer = () => (
    <footer className="d-flex justify-content-between p-3">
        <div>
            Developed by <a href="mailto:efisabo@hotmail.com">Efi Sabo</a>
        </div>
        <ThemeSwitch />
    </footer>
);

export default Footer;