import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const LoginForm = ({handleOnChange, handleOnSubmit, formSwitcher, email, password}) => {
  return (
    <Container>
        <Row>
            <Col>
            <h1 className='text-info text-center'>User Login</h1>
            <hr/><br/>
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
            </Form>
            <br/>
            </Col>
        </Row>

        <Row>
            <Col>
                <a href='#!' onClick={() => formSwitcher('Reset')}>Forgot Password?</a>
            </Col>
        </Row>
    </Container>
  );
};

LoginForm.PropTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher:PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
};