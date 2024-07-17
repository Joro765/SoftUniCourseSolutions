import { createDate } from "../../utils/dateUtils";
import Search from "../search/Search";
import UserList from "../user-section/user-list/UserList";
import Pagination from "./pagination/Pagination";
import AddUser from "./user-add/AddUser";
import UserDetails from "./user-details/UserDetails";

import { useEffect, useState } from "react";


const baseUrl = "http://localhost:3030/jsonstore/users";



export default function UserSection() {
    const [users, setUsers] = useState([]); // initial load users
    const [showAddUser, setShowAddUser] = useState(false); // show/hide addUser panel
    const [showUserDetails, setShowUserDetails] = useState(null); // show/hide userDetails panel


    // INITAL LOAD OF USERS
    useEffect(() => {
        async function getUsers() {
            try {
                const response = await fetch(baseUrl);
                const result = await response.json();
                const data = Object.values(result);

                setUsers(data);
            } catch (error) {
                alert(error.message);
            }

        }

        getUsers();
    }, [])



    // ADD USER PANEL SHOW/HIDE
    function addUserClickHandler() {
        setShowAddUser(true);
    }


    function addUserCloseHandler() {
        setShowAddUser(false);
    }




    // ADD USER
    async function addUserHandler(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData);


        const date = createDate();
        userData.createdAt = date;
        userData.updatedAt = date;

        const response = await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        const createdUser = await response.json();

        setUsers(oldUsers => [...oldUsers, createdUser]);
        setShowAddUser(false);
    }



    // DETAILS
    function showUserDetailsClickHandler(user) {
        setShowUserDetails(user);
    }


    function showUserDetailsCloseHandler() {
        setShowUserDetails(null);
    }


    // DELETE
    function userDeleteClickHandler(userId) {
        console.log(userId);
    }





    return (
        <section className="card users-container">
            <Search />
            <UserList users={users} onClick={showUserDetailsClickHandler} onDelete={userDeleteClickHandler()} />

            {showAddUser && <AddUser onClose={addUserCloseHandler} onSave={addUserHandler} />}

            {showUserDetails && <UserDetails user={showUserDetails} onClose={showUserDetailsCloseHandler} />}

            <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>

            <Pagination />

        </section>
    )
}