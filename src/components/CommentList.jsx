import { getComments } from "../utils/api"
import { useState, useEffect } from "react"
import CommentCard from "./CommentCard"
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import CommentAdder from './CommentAdder';

const CommentsList = () => {
    const { id } = useParams();
    const [comments, setComments] = useState()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getComments(id).then((data) => {
            setComments(data)
            setIsLoading(false);
        })
    }, [id])
    const handleNewComment = (newComment) => {
        setComments([...comments, newComment]);
    };
    if (isLoading) {
        return <h1>Loading...</h1>
    }


    return (
        <Container className="justify-content-center">
            <Row><CommentAdder  handleNewComment={handleNewComment}/></Row>
            <Row style={{ marginTop: '100px' }}>
                {comments.map((comment) => (
                    <Col key={comment.comment_id}>
                        <CommentCard comment={comment} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
export default CommentsList