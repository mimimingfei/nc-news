import { useState, useEffect } from "react"
import NewsCard from './NewsCard'
import { Link } from 'react-router-dom'
import { getArticles } from '../utils/api'


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const NewsList = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true);
   

    useEffect(() => {
        getArticles().then((data) => {
            setNews(data);
            setIsLoading(false);
        })
    }, [])


    if (isLoading) {
        return <h1>Loading...</h1>
    }


    return (
        <Row className="justify-content-center">
            {news.map((article) => (
                <Col xs={12} md={6} key={article.article_id} className="d-flex justify-content-center">
                    <Link to={`/articles/${article.article_id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <NewsCard article={article} /> </Link>
                </Col>
            ))}
        </Row>

    )
}

export default NewsList
