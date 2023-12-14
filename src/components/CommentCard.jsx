import { Container, Row, Col } from 'react-bootstrap';
import './CommentCard.css';
import { deleteComment } from '../utils/api'
import { useState, useContext } from 'react';
import { UserContext } from './UserContext';


const CommentCard = ({ comment, setComments }) => {
    const [err, setErr] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false)

  const user = useContext(UserContext); 
  
  const handleDelete = () => {
    setIsDeleting(true);
    setComments(currentComments => currentComments.filter(c => c.comment_id !== comment.comment_id))
    deleteComment(comment.comment_id)
        .catch(err => {
            setErr(err.message);
        })
        .finally(() => {
            setIsDeleting(false); 
        });
};



const isRightUser = ()=>{
    return user.username ===comment.author
}


    return (
        <Container className="comment-card-container">
         
            <Row>
                <Col xs={12} md={8} lg={6}>
                    <div className="comment-card">
                        <h2>Posted by: {comment.author}</h2>
                        <p>{comment.body}</p>
                        <p>votes: {comment.votes}</p>
                        {isRightUser() && (
                <button onClick={handleDelete} disabled={isDeleting}>Delete</button>

            )}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default CommentCard;
