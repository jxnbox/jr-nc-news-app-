import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as api from '../utils/api';
import moment from "moment";
import VoteUserInteraction from "./VoteUserInteraction";

function DisplayComments() {
    const { article_id } = useParams();
    const [comments, setComments] = useState([]);
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchComments(articleId) {
            const request = await api.getCommentsByArticleId(articleId);
            setIsLoading(false);
            setComments(request);
        }

        async function fetchUsers() {
            const request = await api.getUsers()
            setUsers(request);
        }

        fetchComments(article_id);
        fetchUsers();
    }, [article_id])

    if (isLoading) {
        return (
            <div id="article_container">
                <section id="article_section">
                <p>Loading...</p><div className="loader"></div>
                </section>
            </div>
        )
    }

    return (
        <div id='comment_container'>
            <Link to={`/articles/${article_id}`} id='return_link'>⥄ back</Link>
            <h2 className='comment_title'>COMMENTS</h2>

            <ul id="comment_section">
                {comments.length === 0 ? <h2>No comment</h2> : comments.map(comment => {
                    return users.map(user => {
                        if(user.username === comment.author) {
                            return (
                                <li key={comment.comment_id} id='comment_li'>
                                    <article id="comment_article">
                                        <section id="comment_user_info">
                                            <img src={user.avatar_url} id='user_avatar'/>
                                            <h3 id="comment_author">{comment.author}</h3>
                                            <p id="comment_created_at">{moment(comment.created_at).startOf('day').fromNow()}</p>
                                            <VoteUserInteraction votes={comment.votes}/>
                                        </section>
                                        <p id="comment_body">{comment.body}</p>
                                    </article>
                                </li>
                            )
                        }
                    })
                })}
            </ul>
        </div>
    )
}

export default DisplayComments;