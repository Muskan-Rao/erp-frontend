import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button, Spinner, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { loginPending, loginSuccess, loginFail } from "./loginSlice";
import { userLogin } from "../../api/userApi";
import { getUserProfile } from "../../Page/Dashboard/userAction";

export const Login = ({formSwitcher}) => {
    const dispatch = useDispatch();
	const history = useNavigate();
	let location = useLocation();

	const { isLoading, isAuth, error } = useSelector(state => state.login);
	let { from } = location.state || { from: { pathname: "/" } };

	useEffect(() => {
		sessionStorage.getItem("accessJWT") && history.replace(from);
	}, [history, isAuth]);

	const [email, setEmail] = useState("e2@e.com");
	const [password, setPassword] = useState("password#1F");

	const handleOnChange = e => {
		const { name, value } = e.target;

		switch (name) {
			case "email":
				setEmail(value);
				break;

			case "password":
				setPassword(value);
				break;

			default:
				break;
		}
	};

	const handleOnSubmit = async e => {
		e.preventDefault();

		if (!email || !password) {
			return alert("Fill up all the form!");
		}

		dispatch(loginPending());

		try {
			const isAuth = await userLogin({ email, password });

			if (isAuth.status === "error") {
				return dispatch(loginFail(isAuth.message));
			}

			dispatch(loginSuccess());
			dispatch(getUserProfile());
			history.push("/Dashboard");
		} catch (error) {
			dispatch(loginFail(error.message));
		}
	};

  return (
    <Container>
        <Row>
            <Col>
            <h1 className='text-info text-center'>User Login</h1>
            <hr/><br/>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form autoComplete='off' onSubmit={handleOnSubmit}>
                <Form.Group>
                    <Form.Label className='label'>Email Address</Form.Label>
                    <br/>
                    <Form.Control
                    onChange={handleOnChange}
                    className='email'
                    type="email"
                    name="email"
                    value={email}
                    placeholder='Enter Email'
                    required
                    />
                </Form.Group>
                <br/>
                <Form.Group>
                    <Form.Label className='label'>Password</Form.Label>
                    <br/>
                    <Form.Control
                    onChange={handleOnChange}
                    className='password'
                    type="password"
                    name="password"
                    value={password}
                    placeholder='Password'
                    required
                    />
                </Form.Group>
                <br/>
                <Button className='submit' type='submit'>Login</Button>
                {isLoading && <Spinner variant="primary" animation="border" />}
            </Form>
            <br/><hr/>
            </Col>
        </Row>

        <Row>
            <Col>
                <a href='/password-reset'>Forgot Password?</a>
            </Col>
        </Row>
        <Row className="py-4">
				<Col>
					New here? <a href="/registration">Register Now</a>
				</Col>
			</Row>
    </Container>
  );
};

Login = {
    formSwitcher:PropTypes.func.isRequired,
};