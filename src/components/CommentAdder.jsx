import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { postComment } from '../utils/api';
import { useParams } from 'react-router-dom';
import './CommentAdder.css'
const CommentAdder = ({ setComments }) => {
    const { id } = useParams();
    const [username, setUsername] = useState('grumpy19')
    const [newComment, setNewComment] = useState('')
    const [err, setErr] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const NewComment = { username: username, body: newComment };
        setComments(currComments => [NewComment, ...currComments]);
        setNewComment('');
        postComment(id, NewComment)
            .catch(err => {
                setComments(currComments => currComments.slice(1));
                setErr(err.message)
             } )
            };
    

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <label className='label' htmlFor='newComment'>Logged in: {username} </label>
                <textarea className='textarea' id='newComment' value={newComment} onChange={(e) => setNewComment(e.target.value)} required></textarea>
                <button className='button'>Add</button>
            </form>
        </div >
    );
};
export default CommentAdder;
