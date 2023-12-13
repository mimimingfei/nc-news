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

export const updateVotesOfArticle = (id, newVote) => {
    return newsApi
    .patch(`/api/articles/${id}`, { inc_votes:  newVote })
        .then(({ data }) => {
            return data.updatedArticle;
        });
};