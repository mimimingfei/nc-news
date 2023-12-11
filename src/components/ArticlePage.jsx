const ArticlePage=({article})=>{
    return(
        <>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <img src={article.article_img_url}/>
        <button>{article.comment_count}</button>
        </>
    )

}
export default ArticlePage