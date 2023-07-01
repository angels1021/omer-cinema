import { useEffect, useState } from 'react';
import { ButtonGroup, Button } from "react-bootstrap";
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs';

enum THEME {
    light = 'light',
    dark = 'dark',
}

const getBrowserTheme = (): THEME => window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME.dark : THEME.light;
const getAppTheme = (): THEME => document.documentElement.getAttribute('data-bs-theme') === THEME.dark
    ? THEME.dark
    : THEME.light;
const switchTheme = (theme: THEME) => document.documentElement.setAttribute('data-bs-theme', theme);
const getVariant = (matchTheme: THEME) => matchTheme === getAppTheme() ? 'secondary' : 'outline-secondary';

const ThemeSwitch =() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setTheme] = useState(getBrowserTheme());

    const setActiveTheme = (value: THEME) => () => {
        switchTheme(value);
        // set state to force a repaint
        setTheme(value);
    }

    useEffect(() => {
        switchTheme(getBrowserTheme());
    }, []);

    return (
        <ButtonGroup size="sm" className="theme-switcher">
            <Button variant={getVariant(THEME.light)} onClick={setActiveTheme(THEME.light)}><BsFillSunFill /></Button>
            <Button variant={getVariant(THEME.dark)} onClick={setActiveTheme(THEME.dark)}><BsMoonStarsFill /></Button>
        </ButtonGroup>
    );
};

export default ThemeSwitch;
