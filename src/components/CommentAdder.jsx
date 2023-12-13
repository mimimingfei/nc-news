import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { postComment } from '../utils/api';
import { useParams } from 'react-router-dom';

const CommentAdder = ({ handleNewComment }) => {
    const { id } = useParams();
    const [commentText, setCommentText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newComment = {
            username: "grumpy19",
            body: commentText
        };

        postComment(id, newComment)
            .then(comment => {
                console.log(comment)
                handleNewComment(comment);
                setCommentText('');
            })
            .catch(error => {
                console.error('Error posting comment:', error);
            });
    };

    const handleTextChange = (event) => {
        setCommentText(event.target.value);
    };

    return (
        <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Col />
            <Col xs={12} md={8} lg={6}>
                <Form style={{ marginTop: '50px', display: 'flex' }} onSubmit={handleSubmit}>
                    <Form.Group controlId="commentInput">
                        <Form.Control
                            as="textarea"
                            style={{ width: '800px', height: '100px' }}
                            type="text"
                            placeholder="Write your comment here"
                            value={commentText}
                            onChange={handleTextChange}
                        />
                    </Form.Group>
                    <Button style={{ marginTop: '50px' }} variant="primary" type="submit">
                        Send Comment
                    </Button>
                </Form>
            </Col>
            <Col />
        </Row>
    );
};

export default CommentAdder;
