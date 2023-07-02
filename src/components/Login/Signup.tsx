import { nanoid } from "nanoid";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';
import {Form, Button, InputGroup, Card, Row, Col } from "react-bootstrap";

import { SignupForm } from '../../models';
import { usersSelectors, usersActions } from "../../store";
import { createUser } from "../../services";
import {Link} from "react-router-dom";

export const Signup = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<SignupForm>();

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector(usersSelectors.selectUsers);

    const onSubmit = async (form: SignupForm) => {
        const existing = users.find(u => u.email === form.email);
        if (existing) {
            setError('email', { type: 'custom', message: 'email is already registered' });
            return;
        }

        const { data: user } = await createUser({ ...form, id: nanoid() });
        dispatch(usersActions.addUser(user));
        dispatch(usersActions.setActiveUser(user.id));
        navigate('/', { replace: true });
    };

    return (
        <div className="d-flex flex-column align-items-center pt-5 gap-3">
            <h1>Sign up</h1>
            <Card className="w-50" body>
                <Form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column align-items-center ps-4 pe-4 pb-2 gap-2">
                    <Row className="w-100">
                        <Col className="ps-0">
                            <Form.Group controlId="firstName">
                                <Form.Label>First name</Form.Label>
                                <Form.Control required pattern="[A-Za-z0-9].{2,}" title="2 or more characters" {...register('fname')} />
                            </Form.Group>
                        </Col>
                        <Col className="pe-0">
                            <Form.Group controlId="lastName">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control required pattern="[A-Za-z0-9].{1,}" title="1 or more characters" {...register('lname')} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group controlId="userEmail" className="w-100">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="email" {...register('email')} />
                        {errors.email && (
                            <Form.Control.Feedback className="d-block" type="invalid">{errors.email.message}</Form.Control.Feedback>
                        )}
                    </Form.Group>
                    <Form.Group controlId="userPass" className="mb-4 w-100">
                        <Form.Label>Password</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control pattern=".{3,}" title="Three or more characters" type="password" {...register('password')} />
                        </InputGroup>
                    </Form.Group>
                    <Button type="submit">
                        Signup
                    </Button>
                </Form>
            </Card>
            <div>
                Already have a username and password? <Link to="/login">Login</Link>
            </div>
        </div>
    )
}
