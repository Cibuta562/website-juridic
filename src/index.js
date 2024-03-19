import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Navigate, Route, Routes, useNavigate} from "react-router-dom";
import Despre from "./pages/despreNoi";
import Consultanta from "./pages/consultanta";
import Payment from "./pages/formPayment";

const Root = () => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    const login = () => {
        setIsAuthenticated(true);
    };

    // const logout = () => {
    //     setIsAuthenticated(false);
    // };

    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/despre/noi" element={<Despre/>} />
                    <Route path="/consultanta" element={<Consultanta />} />
                    {/*<Route path="/admin" element={<Admin />} />*/}
                    <Route path="/secure/payment/completed" element={<Payment />} />
                    <Route path="/" element={<App />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);

reportWebVitals();
