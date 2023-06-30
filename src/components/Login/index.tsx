import { useNavigate } from "react-router";
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';
import {Form, Button, InputGroup, Card} from "react-bootstrap";

import { LoginForm } from '../../models';
import { usersSelectors, usersActions } from "../../store";

const Login = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<LoginForm>();

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector(usersSelectors.selectUsers);

    const onSubmit = ({ name, password }: LoginForm) => {
        const user = users.find(u => u.password === password && (u.name === name || u.email === name));

        if (!user) {
            setError('password', { type: 'custom', message: 'invalid name or password' });
            console.log('should set')
            return;
        }

        dispatch(usersActions.setActiveUser(user.id));
        navigate('/home', { replace: true });
    };

    return (
        <div className="d-flex flex-column align-items-center pt-5 gap-3">
            <h1>Login</h1>
            <Card className="w-50" body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="userName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control {...register('name')} />
                    </Form.Group>
                    <Form.Group controlId="userPass" className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control {...register('password')} type="password" />
                            {errors.password && (
                                <Form.Control.Feedback className="d-block" type="invalid">{errors.password.message}</Form.Control.Feedback>
                            )}
                        </InputGroup>
                    </Form.Group>
                    <Button type="submit">
                        Login
                    </Button>
                </Form>
            </Card>
            <div>
                Don have a username and password? <Link to="/signup">Sign up</Link>
            </div>
        </div>
    )
}

export default Login;
