import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StyledEngineProvider} from "@mui/material/styles";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignIn from './pages/login/SignIn';
import PrivateRoute from './components/PrivateRoute';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <BrowserRouter>
                <Routes>
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route
                        path="/"
                        element={
                            <PrivateRoute authenticationPath="/signin"/>
                        }
                    >
                        <Route path="/" element={<App/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </StyledEngineProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
