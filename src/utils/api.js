import axios from "axios";

const newsApi = axios.create({
    baseURL: 'https://jr-news.onrender.com/api/'
})

export const getTopics = () => {
    return newsApi.get('/topic')
        .then((res) => {
            return res.data
        })
}

export const getArticles = () => {
    return newsApi.get(`/articles`)
        .then((res) => {
            return res.data.articles
        })
}

export const getSingleArticle = (article_id) => {
    return newsApi.get(`/articles/${article_id}`)
        .then((res) => {
            return res.data.article
        })
}

export const getAllArticlesIds = () => {
    return newsApi.get(`/articles-id`)
        .then((res) => {
            return res.data
        })
} 