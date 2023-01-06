import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const ResetPassword = ({handleOnChange, handleOnResetSubmit, formSwitcher, email}) => {
  return (
    <Container>
        <Row>
            <Col>
            <h1 className='text-info text-center'>Reset Password</h1>
            <hr/><br/>
            <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
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
                <Button className='submit' type='submit'>Reset Password</Button>
            </Form>
            <br/>
            </Col>
        </Row>

        <Row>
            <Col>
                <a href='#!' onClick={() => formSwitcher('Login')}>Login</a>
            </Col>
        </Row>
    </Container>
  );
};

ResetPassword.PropTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    // password: PropTypes.string.isRequired
};