import {NavLink} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsFillPersonFill } from 'react-icons/bs';
import { Button } from 'react-bootstrap';

import { usersSelectors, usersActions } from '../../store';

export const HeaderTools = () => {
    const dispatch = useDispatch();
    const user = useSelector(usersSelectors.selectActiveUser);
    const logout = () => dispatch(usersActions.logoutUser());

    return (
        <div className="user-nav-wrapper">
            {user
                ? (
                    <div className="d-flex gap-1 align-items-center">
                        <span><BsFillPersonFill /> {user.name}</span>
                        <Button variant="link" onClick={logout}>Logout</Button>
                    </div>

                )
                : (
                    <Button as="div" type="button" variant="outline-light" >
                        <NavLink to="/login"><BsFillPersonFill /> Login</NavLink>
                    </Button>
                )
            }
        </div>
    );
}