import {NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsFillPersonFill } from 'react-icons/bs';
import { Button } from 'react-bootstrap';

import { usersSelectors } from '../../store';

export const HeaderTools = () => {
    const user = useSelector(usersSelectors.selectActiveUser);

    return (
        <div className="user-nav-wrapper">
            {user
                ? (<span><BsFillPersonFill /> {user.name}</span>)
                : (
                    <Button as="div" type="button" variant="outline-light" >
                        <NavLink to="/login"><BsFillPersonFill /> Login</NavLink>
                    </Button>
                )
            }
        </div>
    );
}