import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react"
import { getArticleById } from '../utils/api';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

import './ArticlePage.css'
const ArticlePage = () => {
    const { id } = useParams();
    const [articleData, setArticleData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getArticleById(id).then((data) => {
            setArticleData(data)
            setIsLoading(false);
        })
    }, [id])

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <Container >
      <Row >
        <Col xs={12}>
            <h1 className="article-title">{articleData.title}</h1>
            <p className="author-text">By {articleData.author}</p>
        </Col>
    </Row>
    <Row>
    <Col xs={12} md={8} mdOffset={2} style={{ textAlign: 'center', margin:'10px 200px' }}>
            <img src={articleData.article_img_url} className="article-image"/>
            <p >{articleData.body}</p>
        </Col>
    </Row>
        <Row className="button-container">  
            <Button className = 'button' variant="light">Votes: {articleData.votes}</Button>{' '}     
            <Button className = 'button'variant="light">Comments: {articleData.comment_count}</Button>{' '}
     
        </Row>
    </Container>
    
    )
};
export default ArticlePage