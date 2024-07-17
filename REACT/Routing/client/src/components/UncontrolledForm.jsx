import { useState } from "react";


export default function UncontrolledForm() {
    const [user, setUser] = useState({});


    function formSubmitHandler(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        setUser({
            username: formData.get("username")
        })
    }


    function logoutHandler() {
        setUser({});
    }


    return (
        <>
            <h2>Uncontrolled Form</h2>

            {user.username
                ? <p className="welcome-msg">Hello {user.username}! <button onClick={logoutHandler}>Logout</button></p>
                : (
                    <form onSubmit={formSubmitHandler}>
                        <div className="form-section">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" />
                        </div>
                        <div className="form-section">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" />
                        </div>
                        <div className="form-section">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                )}

        </>
    )
}