import { useState, useEffect } from "react"
import NewsCard from './NewsCard'
import { getArticles } from '../utils/api'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

const NewsList = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate()

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

                    <NewsCard article={article} />
                </Col>
            ))}
        </Row>

    )
}

export default NewsList
