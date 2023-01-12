import { Link } from "react-router-dom";

function DisplayUserInteractions({votes, comments, articleid}) {
    return (
        <div id='button_container'>
        <Link to={`/articles/${articleid}/comments`} id='comment_link' articleid={articleid}><button>💬 <span id="info_count">{comments}</span></button></Link>
        <button>👍  <span id="info_count">{votes}</span></button>
        </div>
    )
}

export default DisplayUserInteractions;