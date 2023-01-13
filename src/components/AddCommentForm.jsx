import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from '../utils/api';
import LoginPage from "./LoginPage";

function AddCommentForm({currentUser, setCurrentUser, setIsUserLoggedIn, isUserLoggedIn}) {
    const { article_id } = useParams();
    const [body, setBody] = useState('')

    const handleUserInput = (e) => {
        setBody(e.target.value)
    } 

    const handleOnClick = () => {
        api.postComment(article_id, currentUser.username, body)
        .then((res) => console.log(res))
    }

    return (
        <div>
            <form action={`/articles/${article_id}/comments`} id='comment_form'>
                <textarea onChange={handleUserInput} placeholder='type your comment here!' className="input_comment_box"/>
                {JSON.stringify(currentUser) === '{}' ? <input type='submit' onClick={handleOnClick} id='submit_comment_btn' disabled/> : <input type='submit' onClick={handleOnClick} id='submit_comment_btn' />}
            </form>
            {JSON.stringify(currentUser) === '{}' && <LoginPage setCurrentUser={setCurrentUser} currentUser={currentUser} setIsUserLoggedIn={setIsUserLoggedIn}/> }
            {isUserLoggedIn && <p id='logged_in'>logged in: {currentUser.username}</p>}
        </div>
    )
}

export default AddCommentForm;