import { Container, Row, Col } from 'react-bootstrap';
import './CommentCard.css'; 

const CommentCard = ({ comment }) => {
    return (
        <Container className="comment-card-container">
            <Row>
                <Col xs={12} md={8} lg={6}>
                    <div className="comment-card">
                        <h2>Posted by: {comment.author}</h2>
                        <p>{comment.body}</p>
                        <p>votes: {comment.votes}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default CommentCard;
