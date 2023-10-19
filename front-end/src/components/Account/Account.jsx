import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { setUsername, logout } from "../../Redux/auth.slice";

function Account() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = useSelector((state) => state.auth.token); // Recovering the token in redux
    console.log("debug recup state du token :" + token);
    const username = useSelector((state) => state.auth.userName); // Retrieving username in redux
    //console.log("debug recup state de l'username :" + username);
    //const firstname = useSelector((state) => state.auth.firstName);
    //const lastname = useSelector((state) => state.auth.lastName);
    const [loading, setLoading] = useState(false);
    const [authenticated, setAuthenticated] = useState(!!username);

    const handleLogout = () => {
        dispatch(logout());  // Deleting the token from the store
        navigate("/")
    };

    useEffect(() => {
        console.log("Token: ", token);
        console.log("Username: ", username);
        console.log("Loading: ", loading);
        console.log("Autenticated: ", authenticated);
        if(token) {
            setLoading(true);
            const fetchData = async () => {
                try {
                    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                        method: 'POST',
                        headers: {
                            'content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    });

                    if (response.ok) {
                        const data = await response.json();
                        console.log(data);

                        dispatch(setUsername({ // Saving data in the store
                            userName: data.body.userName,
                            //firstName: data.body.firstName,
                            //lastName: data.body.lastName,
                         }));
                        setAuthenticated(true);
                    } else {
                        console.log("Error retrieving user profile");
                    }
                    setLoading(false);
                } catch (error) {
                    console.log("Error retrieving user profile");
                    setLoading(false);
                }
            };

            fetchData();
        }
        
    }, [authenticated, dispatch, loading, token, username]);

    useEffect(() => {
        if(!token) {
            setAuthenticated(false);
        }
    }, [token]);

    return (
        <>
            {loading ? (<p>Loading...</p>):(
                authenticated ? (
                    <div className="cont-user">
                        <button className="btn-user" onClick={handleLogout}>Logout</button>
                        <NavLink className="btn-user" to="/user">
                            <i className="fas fa-user-circle"></i>
                            <p>{username}</p>
                        </NavLink>
                    </div>
                ) : (
                    <div className="cont-user">
                        <NavLink className="btn-user" to="/login">
                            <p>Sign In</p>
                        </NavLink>
                        <NavLink className="btn-user" to="/register">
                            <p>Sign Up</p>
                        </NavLink>
                    </div>
                )
            )}
        </>
    )
}

export default Account;