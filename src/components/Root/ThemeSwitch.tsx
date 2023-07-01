import { ButtonGroup, Button } from "react-bootstrap";
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs';

enum THEME {
    light = 'light',
    dark = 'dark',
}

const ThemeSwitch =() => {
    const switchTheme = (theme: THEME) => document.documentElement.setAttribute('data-bs-theme', theme);

    return (
        <ButtonGroup size="sm" className="theme-switcher">
            <Button variant="outline-secondary" onClick={() => switchTheme(THEME.light)}><BsFillSunFill /></Button>
            <Button variant="secondary" onClick={() => switchTheme(THEME.dark)}><BsMoonStarsFill /></Button>
        </ButtonGroup>
    );
};

export default ThemeSwitch;
