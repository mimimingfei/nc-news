import { getTopics, getArticlesByTopic } from "../utils/api";
import NewsCard from "./NewsCard";
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'

const NewsByTopic = () => {
    const { topicSlug } = useParams()
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getArticlesByTopic(topicSlug).then((data) => {
            setArticles(data);
            setIsLoading(false);
        });
    }, [topicSlug]);

    if (isLoading) {
        return <p>Loading articles...</p>;
    }

    return (
        <>
         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '30px', margin:'30px auto' }}>
        <>Topic: {topicSlug}</>
    </div>
            {articles.map((article) => (
                <Link to={`/articles/${article.article_id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <NewsCard key={article.article_id} article={article} /></Link>
            ))}
        </>
    );
};

export default NewsByTopic