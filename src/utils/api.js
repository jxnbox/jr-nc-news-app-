import axios from "axios";

const newsApi = axios.create({
    baseURL: 'https://jr-news.onrender.com/api/'
})

export const getTopics = () => {
    return newsApi.get('/topic')
        .then((res) => {
            return res.data
        })
        .catch(() => {
            console.log('err')
        })
}

export const getArticles = () => {

    return newsApi.get(`/articles`)
        .then((res) => {
            return res.data.articles
        })
        .catch(() => {
            console.log('err')
        })
}