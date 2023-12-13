import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { postComment } from '../utils/api';
import { useParams } from 'react-router-dom';
import './CommentAdder.css'
const CommentAdder = ({ setComments }) => {
    const { id } = useParams();
    const [newComment, setNewComment] = useState('')
    const [err, setErr] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        postComment(id, { username: "grumpy19", body: newComment }) 
            .then((newComment) => {
                setNewComment('');
                setComments((currComments) => {
                    return [newComment, ...currComments];
                });
                alert("Comment posted!")
            })
            .catch(err => {
                setErr('Something went wrong, please try again.');
            });
    };

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <label className='label' htmlFor='newComment'>Add a comment</label>
                <textarea className='textarea' id='newComment' value={newComment} onChange={(e) => setNewComment(e.target.value)} required></textarea>
                <button className='button'>Add</button>
            </form>
        </div >
    );
};
export default CommentAdder;
