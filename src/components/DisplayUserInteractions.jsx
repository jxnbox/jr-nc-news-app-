import { Link } from "react-router-dom";

function DisplayUserInteractions({votes, comments, articleid}) {
    return (
        <div id='button_container'>
        <button><Link to={`/articles/${articleid}/comments`} id='comment_link' articleid={articleid}>💬 <span id="info_count">{comments}</span></Link></button>
        <button>👍  <span id="info_count">{votes}</span></button>
        </div>
    )
}

export default DisplayUserInteractions;