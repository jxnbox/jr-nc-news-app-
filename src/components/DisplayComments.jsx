import { Link, useParams } from "react-router-dom";

function DisplayComments() {
    const { article_id } = useParams()
    

    return (
        <div id='comment_container'>
            <Link to={`/articles/${article_id}`} id='return_link'>⥄ back</Link>
            <h2>COMMENTS</h2>
            <section id="comment_section">
                
            </section>
        </div>
    )
}

export default DisplayComments;