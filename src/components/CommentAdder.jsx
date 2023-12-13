import { useState, useContext } from 'react';
import { postComment } from '../utils/api';
import { useParams } from 'react-router-dom';
import './CommentAdder.css'

const CommentAdder = ({ setComments }) => {
    const { id } = useParams();
    const [newComment, setNewComment] = useState('')
    const [err, setErr] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await postComment(id, { username: "grumpy19", body: newComment });
            setComments(currComments => [response, ...currComments]);
            setNewComment('');
        } catch (error) {
            setErr(error.message);
        }
        setIsSubmitting(false);
    };

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <label className='label' htmlFor='newComment'> Add a comment </label>
                <textarea className='textarea' id='newComment' value={newComment} onChange={(e) => setNewComment(e.target.value)} required></textarea>
                <button className='button' disabled={isSubmitting}>Add</button> 
            </form>
            {err && <div className='error'>{err}</div>}
        </div >
    );
};
export default CommentAdder;
