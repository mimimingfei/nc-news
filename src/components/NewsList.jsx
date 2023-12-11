import { useState, useEffect } from "react"
import NewsCard from './NewsCard'
import {getArticles,getArticleById} from '../utils/api'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

const NewsList = () => {
   const [news, setNews] = useState([])
   const navigate = useNavigate()

    useEffect(() => {
        getArticles().then((data) => setNews(data))
    }, [])
    
    return (
        <Row className="justify-content-center">
            
            {news.map((article) => (
                <Col xs={12} md={6} key={article.article_id} className="d-flex justify-content-center">
                   <div onClick={() => navigate(`/articles/${article.article_id}`)}>
                    <NewsCard article={article} /></div>
                </Col>
            ))}
        </Row>

    )
}

export default NewsList
