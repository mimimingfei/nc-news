import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react"
import { getArticleById, updateVotesOfArticle } from '../utils/api';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CommentList from './CommentList'
import './ArticlePage.css'
import Error from './Error'
const ArticlePage = () => {
    const { id } = useParams();
    const [articleData, setArticleData] = useState(null);
    const [isUpdating, setIsUpdating] = useState(true)
    const [isLoading, setIsLoading] = useState(true)
    const [isUpdating, setIsUpdating] = useState(true)
    const [err, setErr] = useState();


    useEffect(() => {
        getArticleById(id).then((data) => {
            setArticleData(data)
            setIsLoading(false);
        })
    }, [id])


    const handleVote = () => {
        setIsUpdating(true);
        setArticleData({ ...articleData, votes: articleData.votes + 1 });
        updateVotesOfArticle(id, 1).catch(err => {
            setErr(err.message);
            setIsUpdating(false);
        });
      };
    

    const handleDownvote = () => {
        setIsUpdating(true);
        setArticleData({ ...articleData, votes: articleData.votes - 1 });
        updateVotesOfArticle(id, -1).catch(err => {
            setErr(err.message);
            setIsUpdating(false);
        });
    };
    const updateCommentCount = () => {
        getArticleById(id).then((data) => {
            setArticleData(data);
        });
    };

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (err){
        return <Error message = {err}/>
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
                    <Col md={4} xs={6}>Comments: {articleData.comment_count}</Col>
                    <Col md={4} xs={6}>Votes: {articleData.votes}</Col>
                    <Col md={4} xs={6}>
                        <Button onClick={handleVote}>Vote</Button>
                        <Button onClick={handleDownvote} >Downvote</Button>

                    </Col>
                </Row>
    
            </Container>
            <CommentList onNewComment={updateCommentCount} />

        </>
    )
};
export default ArticlePage