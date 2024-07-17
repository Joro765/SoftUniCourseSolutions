import { useEffect, useState, useRef } from "react";


export default function ControlledForm() {
    const [formValues, setFormValues] = useState({
        username: "",
        password: "",
        occupation: "AI",
    })


    // USEREF DEMO - selects userame input on initial render
    const inputRef = useRef();
    const buttonRef = useRef();


    // Load Data and put inside State
    useEffect(() => {
        async function loadUser() {
            const response = await fetch("http://localhost:3030/jsonstore/advanced/profiles/fb352199-bcbc-4e1d-a1dc-ed346a6fb49a");
            const profile = await response.json();

            setFormValues(oldFormValues => ({ ...oldFormValues, username: profile.username }));
        }

        loadUser();
        inputRef.current.focus();

    }, []);


    // FORM SUBMIT
    function formSubmitHandler(e) {
        e.preventDefault();
        console.log("Form submitted!");
    }


    // CHANGE HADLER FOR ALL INPUTS
    function changeHandler(e) {
        setFormValues(oldFormValues => ({ ...oldFormValues, [e.target.name]: e.target.value }));

        if (formValues.username.length > 6 && formValues.password.length > 6) {
            buttonRef.current.disabled = false;
        }
    }

    return (
        <>
            <h2>Controlled Form</h2>
            <form onSubmit={formSubmitHandler}>
                <div className="form-section">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" value={formValues.username} onChange={changeHandler} ref={inputRef} />
                </div>
                <div className="form-section">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={formValues.password} onChange={changeHandler} />
                </div>
                <div className="form-section">
                    <label htmlFor="occupation">Occupation</label>
                    <select name="occupation" id="occupation" value={formValues.occupation} onChange={changeHandler}>
                        <option value="IT">IT</option>
                        <option value="BA">BA</option>
                        <option value="AI">AI</option>
                    </select>
                </div>
                <div className="form-section">
                    <button disabled type="submit" ref={buttonRef}>Submit</button>
                </div>
            </form>
        </>
    )
}