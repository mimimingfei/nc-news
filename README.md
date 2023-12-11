app.get('/api/topics', getAllTopics);
app.get('/api', getAllEndpoints);
app.get('/api/articles/:article_id',getArticleById)
app.get('/api/articles/:article_id/comments',getCommentsForArticle)
app.get('/api/articles',getArticles)

app.get('/api/users',getAllUsers)



app.post('/api/articles/:article_id/comments', postCommentForArticle)
app.delete('/api/comments/:comment_id',deleteComment)
app.patch('/api/articles/:article_id',updateArticle)
