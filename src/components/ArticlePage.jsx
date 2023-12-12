import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react"
import { getArticleById } from '../utils/api';
import { Container, Row, Col} from 'react-bootstrap';
import CommentList from './CommentList'
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
        <>
            <Container>
                <Row>
                    <Col xs={12}>
                        <h1 className="article-title">{articleData.title}</h1>
                        <p className="author-text">By {articleData.author}</p>
                    </Col>
                </Row>
                <Row>
                <Col xs={12} md={8}>
                        <img src={articleData.article_img_url} className="article-image" />
                        <p className='article-body'>{articleData.body}</p>
                    </Col>
                </Row>
                <Row className='votes'>
                    <Col md={4} xs={6}>Votes: {articleData.votes}</Col>
                    <Col md={4} xs={6}>Comments: {articleData.comment_count}</Col>
                </Row>
            </Container>
            <CommentList />
        </>
    )
};
export default ArticlePage