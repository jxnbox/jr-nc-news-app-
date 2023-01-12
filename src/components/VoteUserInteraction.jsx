import { useParams } from "react-router-dom";

function VoteUserInteraction ({votes}) {
    const {article_id} = useParams()

    console.log(article_id)

    return (
        <div id="votes_div">
            <button id="vote_btn">⬆</button>
            <p id="comment_votes">{votes}</p>
            <button id="vote_btn">⬇</button>                                                        
        </div>
    )
}

export default VoteUserInteraction;