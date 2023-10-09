import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Register() {
    const token = useSelector(state => state.auth.token);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handleRegister = (event) => {
        event.preventDefault();
        const userData = {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            username: username
        };

        fetch('http://localhost:3001/api/v1/user/signup', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);

            if (data.status !== 200) {
                setError(true);
                return;
            } else {
                alert('Your account has been created !');
                navigate("/login")
            }
        })
        .catch(error => {
            console.log(error);
        });
    };

    useEffect(() => {
        if (token) {
            navigate("/user");
        }
    }, [token, navigate]);

    return (
        <main>
            <section className="register">
                <i className="fa fa-user-circle sign-up-icon"></i>

                <form onSubmit={handleRegister}>
                    <div className="register-cont">
                        <div className="input-wrapper">
                            <label htmlFor="email">Email</label>
                            <input className={error ? 'register__error-border' : ''} type="email" id="email" value={email} onChange={handleEmailChange} required />
                        </div>

                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input className={error ? 'register__error-border' : ''} type="email" id="password" value={password} onChange={handlePasswordChange} required />
                        </div>
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="fistName">First Name</label>
                        <input className={error ? 'register__error-border' : ''} type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} required />
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="lastName">Last Name</label>
                        <input className={error ? 'register__error-border' : ''} type="text" id="lastName" value={lastName} onChange={handleLastNameChange} required />
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="userName">User Name</label>
                        <input className={error ? 'register__error-border' : ''} type="text" id="userName" value={username} onChange={handleUsernameChange} required />
                    </div>

                    {error && <p className="register__error-message" >An error has occurred</p>}

                    <button className="register-button" type="submit">Sign Up</button>

                </form>
            </section>
        </main>
    )
}

export default Register;