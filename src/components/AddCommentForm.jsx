import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from '../utils/api'

function AddCommentForm({currentUser}) {
    const { article_id } = useParams();
    const [body, setBody] = useState('')
    console.log(currentUser)

    const handleUserInput = (e) => {
        setBody(e.target.value)
    } 

    const handleOnClick = () => {
        api.postComment(article_id, currentUser.username, body)
        .then((res) => console.log(res))
    }

    return (
        <form action={`/articles/${article_id}/comments`} id='comment_form'>
            <textarea onChange={handleUserInput} placeholder='type your comment here!' className="input_comment_box"/>
            <input type='submit' onClick={handleOnClick} id='submit_comment_btn' />
        </form>
    )
}

export default AddCommentForm;