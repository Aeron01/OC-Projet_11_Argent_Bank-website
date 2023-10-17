import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUsername, logout } from "../../Redux/auth.slice";

function Account() {

    const dispatch = useDispatch();

    const token = useSelector((state) => state.auth.token); // Recovering the token in redux
    console.log("debug recup state du token :" + token);
    const username = useSelector((state) => state.auth.username); // Retrieving username in redux
    console.log("debug recup state de l'username :" + username);
    //const firstname = useSelector((state) => state.auth.firstname);
    //const lastname = useSelector((state) => state.auth.lastname);
    

    const handleLogout = () => {
        dispatch(logout());  // Register the token in the store
    };

    useEffect(() => {
        if(token) {
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
                            username: data.body.username,
                            //firstname: data.body.firstname,
                            //lastname: data.body.lastname,
                         }));
                    } else {
                        console.log("Error retrieving user profile");
                    }
                } catch (error) {
                    console.log("Error retrieving user profile");
                }
            };

            fetchData();
        }
        
    }, [dispatch, token]);

    return (
        <>
        {console.log('username : '+username)}
            {username ? (
                <div className="cont-user">
                    <button className="btn-user" onClick={handleLogout}>Logout</button>
                    <NavLink className="btn-user" to="/user">
                        <i className="fas f-user-circle"></i>
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
            )}
        </>
    )
}

export default Account;