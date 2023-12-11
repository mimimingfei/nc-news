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
        <Container>
            <Row >
                <Col>
                    <h1>{articleData.title}</h1>
                    <h2>Author: {articleData.author}</h2>
                </Col>
            </Row>
            <Row>
                <Col/>
                <Col xs = {8}>
                    <Image src={articleData.article_img_url}/>
                     <p>{articleData.body}</p>
                </Col>
                <Col/>
                   
            </Row>
            <Row>
                <Col/>
                <Col xs={1}>
                    <Button variant="primary">Votes: {articleData.votes}</Button>
              </Col>
              <Col/>
              <Col xs={1}>
                    <Button variant="secondary">Comments: {articleData.comment_count}</Button>
                </Col> <Col/>
            </Row>
        </Container>
    )
};
export default ArticlePage