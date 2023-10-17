import { useState, useEffect } from "react";
import { useSelector } from "react-redux"; // rajouter useDispatch

function EditUser() {

    // const dispatch = useDispatch();

    // const token = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.auth.username);
    const firstname = useSelector((state) => state.auth.firstname);
    const lastname = useSelector((state) => state.auth.lastname);

    const [showForm, setShowForm] = useState(false);
    const [newUsername, setNewUsername] = useState('');

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleInputChange = (event) => {
        setNewUsername(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // rajouter la logique de l'envois des nouvelle info vers le back-end
    }

    useEffect(() => {
        setNewUsername(user);
    },[user]);

    return (
        <>
            <section className="account-header">
                <h1>Welcome back, {firstname} {lastname} !</h1>

                {!showForm && (
                    <button className="transaction-button button" onClick={toggleForm}>Edit your name</button>
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

                    <button type="submit" className="transaction-button button">Confirm</button>

                </form>
            )}
        </>
    )
}

export default EditUser;