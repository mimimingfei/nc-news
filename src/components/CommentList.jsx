import { getComments } from "../utils/api"
import { useState, useEffect } from "react"
import {CommentCard} from './CommentCard'
const CommentsList = ()=>{


const [comments, setComments] = useState()
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
    getComments(id).then((data) => {
       setComments(data)
        setIsLoading(false);
    })
}, [id])

 if (isLoading) {
    return <h1>Loading...</h1>
}


return (
    <Row className="justify-content-center">

        {comments.map((comment) => (
            <Col xs={12} md={6} key={comment.comment_id} className="d-flex justify-content-center">
                <CommentCard comment={comment} />
            </Col>
        ))}
    </Row>

)
}
export default CommentsList