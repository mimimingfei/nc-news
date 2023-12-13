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

export const getArticleById =(id)=>{
    return newsApi
    .get(`/api/articles/${id}`)
    .then(({data})=>{
        return data.article
    })
}
export const getComments = (id)=>{
    return newsApi
    .get(`/api/articles/${id}/comments`)
    .then(({data})=>{
        return data.comments
    })
}

export const postComment = (id, comment) => {
    return newsApi
        .post(`/api/articles/${id}/comments`, comment)
        .then(({ data }) => {
            return data.Comment;
        });
};
