import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as api from '../utils/api'

function DisplayComments() {
    const { article_id } = useParams();
    const [comments, setComments] = useState([])
    
    useEffect(() => {
        async function fetchComments(articleId) {
            let request = await api.getCommentsByArticleId(articleId)
            console.log(request)
            setComments(request)
        }

        fetchComments(article_id)
    }, [article_id])

    return (
        <div id='comment_container'>
            <Link to={`/articles/${article_id}`} id='return_link'>⥄ back</Link>
            <h2>COMMENTS</h2>

            <ul id="comment_section">
                {comments.map(comment => {
                    return (
                        <li key={comment.comment_id}>
                            <article id="comment">
                                <h3>{comment.author}</h3>
                                <p>{comment.body}</p>
                            </article>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default DisplayComments;