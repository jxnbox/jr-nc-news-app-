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

export const getCommentsByArticleId = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`)
        .then((res) => {
            return res.data
        })
}

export const getUsers = () => {
    return newsApi.get(`/users`)
        .then((res) => {
            return res.data
        })
}

export const patchArticleVote = (article_id) => {
    const patchBody = {
        inc_votes : 1
    }

    return newsApi.patch(`/articles/${article_id}`, patchBody)
        .then((res) => {
            return res.data
        });
}

export const postComment = (article_id, username, body) => {
    const postBody = { username , body}

    return newsApi.post(`/articles/${article_id}/comments`, postBody)
        .then((res) => {
            return res.data
        });
}