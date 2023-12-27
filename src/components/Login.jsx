import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from '../styles/Form.module.css';

function Login() {
    const [payload, setPayload] = useState({
        username: '',
        password: '',
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setPayload({
            ...payload,
            [e.target.name]: e.target.value
        });
    };

    const navigate = useNavigate();

    const proceedLogin = async (e) => {
        e.preventDefault();
        const user = {
            user: payload,
        };

        try {
            const resp = await axios.post('http://127.0.0.1:3001/login', user);
            if(resp.data.status.code === 200) {
                localStorage.setItem('isAuthenticated', 'true');
                const loggedInUser = JSON.stringify(resp.data.status.user);
                localStorage.setItem('user', loggedInUser);
                navigate('/');
            }
            return {};
        } catch (err) {
            setErrorMessage(err.response.data);
            return{};
        }
    };

    return (
        <div className={`${styles.formContainer}`}>
            <p className={`${styles.errMsg}`}>{errorMessage}</p>
            <form onSubmit={proceedLogin}>
                <input
                    name="username"
                    type="text"
                    required
                    placeholder="User Name"
                    value={payload.username}
                    onChange={handleChange}
                />
                <br />
                <input
                    name="password"
                    type="password"
                    required
                    placeholder="Password"
                    value={payload.password}
                    onChange={handleChange}
                />
                <br />
                <button type="submit">Login</button>
            </form>
            <Link to="/register"><p>Don&apos;t have an account? Register Here</p></Link>
        </div>
    );
}

export default Login;