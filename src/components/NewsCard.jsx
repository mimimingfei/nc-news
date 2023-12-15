import React from 'react';
import Card from 'react-bootstrap/Card';
import './NewsCard.css';

const NewsCard = ({ article }) => {

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = `${date.getDate()} ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
        return formattedDate;
    };
    return (
        <Card className="news-card">
            <Card.Img
                variant="left"
                src={article.article_img_url}
                className="news-card-img"
            />
            <Card.Body className="news-card-body">
                <Card.Title className="news-card-title">{article.title}</Card.Title>
                <Card.Subtitle className="news-card-subtitle">By {article.author}</Card.Subtitle>
                <p>{formatDate(article.created_at)}</p>
                <div className='commentsVotesSection'>
                <p>Comments: {article.comment_count}</p>
                <p>Votes: {article.votes}</p>
                </div>
            </Card.Body>
        </Card>
    );
}

export default NewsCard;
