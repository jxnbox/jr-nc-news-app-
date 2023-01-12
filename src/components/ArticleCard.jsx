import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import * as api from '../utils/api'
import moment from "moment";
import DisplayUserInteractions from "./DisplayUserInteractions";

function ArticleCard() {
    const { article_id } = useParams();
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [articleIds, setArticleIds] = useState([])
    const [nextArticle, setNextArticle] = useState(parseInt(article_id))
    const [prevArticle, setPrevArticle] = useState(parseInt(article_id))

    const handleNext = (e) => {
        setNextArticle(articleIds[articleIds.findIndex(currentArticle => currentArticle.article_id === nextArticle) + 1].article_id)
    } 
    const handlePrev = (e) => {
        setPrevArticle(articleIds[articleIds.findIndex(currentArticle => currentArticle.article_id === nextArticle) - 1].article_id)
    } 

    useEffect( () => {
        async function fetchArticle(articleId) {
            let request = await api.getSingleArticle(articleId)
            setIsLoading(false);
            setArticle(request)
        }

        async function fetchAllArticleId() {
            let request = await api.getAllArticlesIds()
            setArticleIds(request)
        }

        fetchArticle(article_id)
        fetchAllArticleId()
    }, [article_id, article])

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
        <div id="article_container">
            <Link to={`/articles/${nextArticle}`} id='next_link'><button onClick={handleNext} id='next_article_btn'>next</button></Link>
            <Link to={`/articles/${prevArticle}`} id='next_link'><button onClick={handlePrev} id='prev_article_btn'>prev</button></Link>
            <section id="article_section">
            <Link to={`/`} id='return_link'>⥄ back</Link>
                <article id='single_article'>
                    <div id="info_container">
                        <p>Author: {article.author}</p>
                        <p id="article_created_at">{moment(article.created_at).calendar()}</p>
                        </div>
                        <h2 id='article_title'>{article.title}</h2>
                        <p id='article_body'>{article.body}</p>
                </article>
            </section>
            <DisplayUserInteractions votes={article.votes} setArticle={setArticle} comments={article.comment_count} articleid={article.article_id}/>
        </div>
    )
}

export default ArticleCard;