import { useEffect } from "react"
import { useNavigate } from "react-router";

function Logout() {
    const navigate = useNavigate();
    useEffect(() => {
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('userType');
        navigate('/redirect');
        window.location.reload();
    }, []);
    return (
        <div>Logging Out</div>
    )
}
export default Logout;