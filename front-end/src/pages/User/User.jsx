// importation
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import Transactions from "../../components/Transactions/Transactions";
// import EditUser from "../../components/EditUser/EditUser";

function User() {
    
    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token, navigate])

    return (

        <main className="main">
            {/* <EditUser /> */}
            <Transactions />
        </main>
    )
}

export default User