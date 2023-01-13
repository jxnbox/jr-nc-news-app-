import { useEffect, useState } from "react";
import * as api from '../utils/api';

function LoginPage({setCurrentUser, currentUser, setIsUserLoggedIn}) {

    const [userInput, setUserInput] = useState('');
    const [isValidUser, setIsValidUser] = useState(null)
    const [users, setUsers] = useState([]);
    
    const handleValue = (e) => {
        setUserInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        users.forEach(user => {
            if (user.username === userInput) {
                setIsValidUser(true);
                setCurrentUser(user)
                setIsUserLoggedIn(true)
            }
        })
        setUserInput('')
    }

    useEffect(() => {
        async function fetchUsers() {
            const request = await api.getUsers()
            setUsers(request);
            console.log(request)
        }

        fetchUsers();
    }, [])


    return (
        <div id="login_div">
            <form id="login_form" onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>
                <input type='text' name="username" value={userInput} onChange={handleValue}></input>
                <input type='submit' value='Login'/>
            </form>

            <ul>
                {users.map(user => <li key={user.username} style={{color: 'white'}}>username: {user.username}</li>)}
            </ul>
            {isValidUser && <p style={{color: 'green'}}>logged in as {currentUser.username}</p>}
        </div>
    )

}

export default LoginPage;