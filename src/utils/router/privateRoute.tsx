import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../hook";

const PrivateRoute = () => {
    const auth = useAuth()
    return (
        auth ? <Outlet /> : <Navigate to="login" />
    );
};

export default PrivateRoute;