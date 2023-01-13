import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as api from '../utils/api';
import ErrorComponent from "./ErrorComponent";


function DisplayUserInteractions({votes, comments, articleid, setArticle}) {
    const [voteCount, setVoteCount] = useState(votes);
    const [error, setError] = useState(null);
    const [apiError, setApiError] = useState({});

    const handleVote = () => {
        setVoteCount(current => current + 1)
        setArticle(current => {
            return {...current, votes: votes + 1}
        })
        
        if(error) {
            setError(null)
        }

        api.patchArticleVote(articleid)
        .catch((err) => {
            setVoteCount(current => current - 1)
            setArticle(current => {
                return {...current, votes: votes - 1}
            })
            setError(true)
            setApiError(err)
        })
    }

    useEffect(() => {

    }, [error, voteCount])

    return (
        <section>
            {error && <ErrorComponent apiError={apiError} />}
            <div id='button_container'>
                <Link to={`/articles/${articleid}/comments`} id='comment_link' articleid={articleid}><button>💬 <span id="info_count">{comments}</span></button></Link>
                <button onClick={handleVote}>👍  <span id="info_count">{voteCount}</span></button>
            </div>
        </section>
    )
}

export default DisplayUserInteractions;