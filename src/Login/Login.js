import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../fbAuth"
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css"

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth);
    const [checked, setChecked] = useState(false);

    const nav = useNavigate();

    const handleLogin = () => {
        signInWithEmailAndPassword(email, password);
    }

    useEffect(() => {

        if (loading) return;
        if (user) nav("/dashboard");

    }, [user, loading]);

    return (
        <>
            <div className="login">
                <div className="container_login">
                    <input
                        type="text"
                        className="textInput_login"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Type your E-mail Address"
                    />
                    <input
                        type="password"
                        className="textInput_login"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Type your Password"
                    />

                    <div className="checkbox_login">
                        <input
                            defaultChecked={checked}
                            onChange={() => setChecked(!checked)}
                            type="checkbox"
                            id="terms"
                            value="terms">
                        </input> <label htmlFor="terms">
                            By logging in, I accept the terms & conditions of the platform
                        </label>

                    </div>

                    <br></br>
                    <button
                        disabled={!checked}
                        className="button_login"
                        onClick={handleLogin}>
                        Login
                    </button>
                </div>
            </div>

            <div>
                <Link to="/register">Create an account instead</Link>
            </div>
        </>

    );
}
export default Login;