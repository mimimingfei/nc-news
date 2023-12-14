import axios from 'axios';

const newsApi = axios.create({
    baseURL: 'https://news-ynk8.onrender.com',
})

export const getArticles = () => {
    return newsApi
        .get('/api/articles')
        .then(({ data }) => {
            return data.articles
        })
}

export const getArticleById = (id) => {
    return newsApi
        .get(`/api/articles/${id}`)
        .then(({ data }) => {
            return data.article
        })
}
export const getComments = (id) => {
    return newsApi
        .get(`/api/articles/${id}/comments`)
        .then(({ data }) => {
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

export const updateVotesOfArticle = (id, newVote) => {
    return newsApi
    .patch(`/api/articles/${id}`, { inc_votes: newVote })
        .then(({ data }) => {
            return data.updatedArticle;
        });
};


export const getArticlesByTopic = (topic) => {
    return newsApi
    .get(`/api/articles?topic=${topic}`)
        .then(({ data }) => {
            return data.articles;
        });
};

export const getTopics = ()=>{
    return newsApi
    .get('/api/topics')
    .then(({data})=>{
        return data
    })
}

export const deleteComment = (comment_id) => {
    return newsApi
        .delete(`/api/comments/${comment_id}`)
        .then((response) => {
            return response.status
        })
}


