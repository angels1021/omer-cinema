import {NavLink} from "react-router-dom";
import {Tabs, Tab } from '@mui/material';



const Menu = () => (
    <nav>
        <Tabs orientation="vertical">
            <Tab component={NavLink} to="/" label="Home" className="nav-tab" />
            <Tab component={NavLink} to="/about" label="About" className="nav-tab" />
        </Tabs>
    </nav>
);

export default Menu;