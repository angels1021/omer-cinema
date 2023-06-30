import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { usersActions, usersSelectors } from '../../store';
import { getUsers } from '../../services';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import './style.css';


const Root = () => {
    const dispatch = useDispatch();
    const isInitialized = useSelector(usersSelectors.selectIsInitialized);

    useEffect(() => {
        if(!isInitialized) {
            getUsers().then(({data}) => dispatch(usersActions.setUsers(data)));
        }
    }, [isInitialized, dispatch]);

    return (
        <div className="app-main">
            <Header />
            <div className="container main-content">
                <Main />
            </div>
            <Footer />
        </div>
    )
};

export default Root;