import { useEffect, useState } from "react";
import * as api from '../utils/api'

function DisplayArticles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchArticles(limit) {
            let request = await api.getArticles(limit);
            setArticles(request);
            console.log(articles)
        }

        fetchArticles()
    }, [])

    return (
        <div id="article_container">
            <section id="article_section">
                {articles.map(article => {
                    return <article key={article.article_id}>
                        <h3>{article.title}</h3>
                    </article>
                })}
            </section>
        </div>
    )
}

export default DisplayArticles;