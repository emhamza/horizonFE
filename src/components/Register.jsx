import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordCon] = useState('');
    const [isSuccess, setIsSuccess] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            user: {
                username, email, password, passwordConfirmation,
            },
        };

        try {
            const resp = await axios.post('http://127.0.0.1:3001/signup', newUser);
            if (resp.data.status.code === 200) {
                setIsSuccess(true);
            }
            // return {};
        } catch (err) {
            setErrorMessage(err.response.data.status.message);
            // return {};
        }
    };

    return (
        <div>
            {isSuccess ? (
                <div>
                    <p>Welcome to LitHub!</p>
                    <div>
                        <Link to="/login">
                            <button type="button">Login</button>
                        </Link>
                    </div>
                </div>
            ) : (
                <>
                    <p>{errorMessage}</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            name="username"
                            type="text"
                            required
                            placeholder="User Name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <br />
                        <input
                            name="email"
                            type="text"
                            required
                            placeholder="Type Your Email Here"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <br />
                        <input
                            name="author"
                            type="password"
                            required
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br />
                        <input
                            name="password_confirmation"
                            type="password"
                            required
                            placeholder="Confirm Password"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordCon(e.target.value)}
                        />
                        <br />
                        <button type="submit">Register</button>
                    </form>
                    <Link to="/">Back</Link>
                </>
            )}
        </div>
    );
}

export default Register;
