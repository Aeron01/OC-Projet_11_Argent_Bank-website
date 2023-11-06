import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsername } from "../../Redux/auth.slice";


function EditUser() {

    const dispatch = useDispatch();

    const token = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.auth.userName);
    const firstname = useSelector((state) => state.auth.firstName);
    const lastname = useSelector((state) => state.auth.lastName);

    
    const [showForm, setShowForm] = useState(false);
    const [newUsername, setNewUsername] = useState('');
    
    const toggleForm = () => {
        setShowForm(!showForm);
    };
    
    const handleInputChange = (event) => {
        setNewUsername(event.target.value);
    };
    
    /* in case it is necessary to modify the email following an entry error
    const email = useSelector((state) => state.auth.email);
    const [newEmail, setNewEmail] = useState('');
    const handleInputEmailChange = (event => {
        setNewEmail(event.target.value);
    });
    */

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
          const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({userName: newUsername /*, email: newEmail*/ }),
          });

          if (response.ok) {
            console.log(response);
            dispatch(setUsername({
                type: 'SET_USER',
                payload: {
                    userName: newUsername,
                    firstName: firstname,
                    lastName: lastname,
                    // email: newEmail,
                },
            }));

          } else {
            console.error('Error sending new username');
          }

        } catch (error){
            console.error('Error during query', error);
        }
        setNewUsername('');
        // setNewEmail('');
        setShowForm(false);
    };

    useEffect(() => {
        setNewUsername(user);
        // setNewEmail(email);
    },[user /*, email*/]);

    const handleCancelClick = () => {
        setShowForm(false);
    }

    return (
        <>
            <section className="account-header">
                <h1>Welcome back, {firstname} {lastname} !</h1>

                {!showForm && (
                    <button className="editUser-button button" onClick={toggleForm}>Edit your name</button>
                )}
            </section>

            {showForm && (
                <form className="account-form" onSubmit={handleSubmit}>
                    <label>First Name:</label>
                    <input type="text" value={firstname} disabled />

                    <label>Last Name:</label>
                    <input type="text" value={lastname} disabled />

                    <label>New Username:</label>
                    <input type="text" value={newUsername} onChange={handleInputChange} required />

                    {/* <label>New Email:</label>
                    {console.log('Current Email: '+ email)}
                    <p>Current Email: {email}</p>
                    <input type="email" value={newEmail} onChange={handleInputEmailChange} required /> */}
                    
                    <div className="account-buttons">
                        <button type="submit" className="editUser-button button">Save</button>
                        <button type="button" className="editUser-button button" onClick={handleCancelClick}>Cancel</button>
                    </div>
                </form>
            )}
        </>
    )
}

export default EditUser;