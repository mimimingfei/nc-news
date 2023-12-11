import axios from 'axios';

const newsApi = axios.create({
    baseURL: 'https://news-ynk8.onrender.com',
})

export const getArticles = ()=>{
    return newsApi
    .get('/api/articles')
    .then(({data})=>{
        return data.articles
    })
}