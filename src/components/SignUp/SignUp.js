import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';
import './SignUp.css'

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        if (password.length < 6) {
            setError('Password should be at least 6 characters');
            return;
        }
        if (password !== confirm) {
            setError('Your password did not match');
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => {
                console.error('error', error);
            })
    }
    return (
        <div className='form-container'>
            <h4 className='form-title'>Sign Up</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" required />
                </div>

                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SignUp;