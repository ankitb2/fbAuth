import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import {
    auth,
    registerWithEmailAndPassword,
} from "../fbAuth"
import { addData } from "../features/dashboard/dashboardSlice";

import "./Register.css"

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth);

    const dispatch = useDispatch();

    const nav = useNavigate();

    const register = async () => {

        let condition = /^(?=.{8,}$)(?=.*?[A-Z])(?=.*?[0-9]).*$/g.test(password);

        if (!condition) return alert('password must contain min 8 characters, At Least 1 uppercase and 1 number');

        const res = await registerWithEmailAndPassword(email, password);

        const serialised = {
            email: res.user.email,
            mobile: res.user.phoneNumber,
            photoURL: res.user.photoURL,
            refreshToken: res.user.refreshToken
        }

        if(res) dispatch(addData(serialised));
    };

    useEffect(() => {
        if (loading) return;
        if (user) nav("/dashboard");
    }, [user, loading]);


    return (
        <div className="register">
            <div className="container_register">
                <input
                    type="text"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="textInput_register"
                    value={email}
                    placeholder="Type your e-mail Address"
                />
                <input
                    type="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="textInput_register"
                    value={password}
                    placeholder="Type your password"
                />
                <button className="button_register" onClick={register}>
                    Register
                </button>
                <div>
                    Login to existing account : <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    );
}
export default Register;