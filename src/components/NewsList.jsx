import { useState, useEffect } from "react"
import NewsCard from './NewsCard'
import {getArticles} from '../utils/api'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const NewsList = () => {
   const [news, setNews] = useState([])

    useEffect(() => {
        getArticles().then((data) => setNews(data))
    }, [])

    return (
        <Row className="justify-content-center">
            {news.map((article) => (
                <Col xs={12} md={6} key={article.id} className="d-flex justify-content-center">
                    <NewsCard article={article} />
                </Col>
            ))}
        </Row>

    )
}

export default NewsList
