import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as api from '../utils/api'
import moment from "moment";

function DisplayArticles() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchArticles(limit) {
            let request = await api.getArticles(limit);
            setIsLoading(false)
            setArticles(request);
        }

        fetchArticles()
    }, [])

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
            <section id="article_section">
                {articles.map(article => {
                    return <article key={article.article_id} id='basic_article_cards'>
                        <Link to={`/articles/${article.article_id}`} id='article_link'>
                            <h3 id="article_title">{article.title}</h3>
                            <p id="article_created_at">{moment(article.created_at.slice(0,10)).calendar()}</p>
                        </Link>
                    </article>
                })}
            </section>
        </div>
    )
}

export default DisplayArticles;

