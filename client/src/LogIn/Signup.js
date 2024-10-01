import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { RegisterUser } from '../redux/actiontype';
import { Link } from 'react-router-dom';
import styles from './sign.module.css';

function Signup() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { userName, email, password };

    try {
      const response = await dispatch(RegisterUser(data));
      if (response && response.error) {
        setError('Email already registered');
        setSuccessMessage('');
      } else {
        setError('');
        setSuccessMessage('Registration successful');
      }
    } catch (error) {
      console.error("Error while registering:", error);
      setError('Error during registration');
      setSuccessMessage('');
    }
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>Sign in</button>
          </Link>
        </div>
        <div className={styles.right}>
          <Form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <Form.Group controlId="formBasicUserName">
              <Form.Label>User name</Form.Label>
              <Form.Control type="text" placeholder="User name" className={styles.input} onChange={(e) => setUserName(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" className={styles.input} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" className={styles.input} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            {error && <div className={styles.error_msg}>{error}</div>}
             {successMessage && !error && <div className={styles.success_msg}>{successMessage}</div>}

            <Button variant="primary" type="submit" className={styles.green_btn}>Sign Up</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
