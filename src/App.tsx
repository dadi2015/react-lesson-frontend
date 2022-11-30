import React from 'react';
import Home from "./components/home";
import {Route, Routes} from "react-router-dom";
import PrivateRoute from "./utils/router/privateRoute";
import AuthRootComponent from "./components/auth";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<Home/>}/>
                </Route>
                <Route path="login" element={<AuthRootComponent />}/>
                <Route path="register" element={<AuthRootComponent />}/>
            </Routes>
        </div>
    );
}

export default App;
