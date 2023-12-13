import { Container, Row, Col } from 'react-bootstrap';
import './CommentCard.css';
import { deleteComment } from '../utils/api'
import { useState } from 'react';

const CommentCard = ({ comment, setComments }) => {
    const [err, setErr] = useState(null);

    const handleDelete = () => {
        setComments(currentComments => currentComments.filter(c => c.comment_id !== comment.comment_id))
        deleteComment(comment.comment_id)
            .catch(err => {
                setErr(err.message)
            });
    };

    return (
        <Container className="comment-card-container">
            <Row>
                <Col xs={12} md={8} lg={6}>
                    <div className="comment-card">
                        <h2>Posted by: {comment.author}</h2>
                        <p>{comment.body}</p>
                        <p>votes: {comment.votes}</p>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default CommentCard;
