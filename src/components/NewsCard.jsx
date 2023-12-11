import React from 'react';
import Card from 'react-bootstrap/Card';

const NewsCard = ({ article }) => {
    


    return (
        <Card style={{ background: '#FBEED3', display: 'flex', justifyContent: 'space-evenly', margin: '20px 300px', minHeight: '200px' }}>
            <Card.Img
                variant="left"
                src={article.article_img_url}
                style={{ width: '100%', maxWidth: '200px', objectFit: 'cover', margin: '10px 80px'}}
            />
            <Card.Body style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative',marginRight:'20px' }}>
                <Card.Title style={{ fontSize: '25px', fontFamily: 'sans-serif', marginBottom: '20px' }}>{article.title}</Card.Title>
                <Card.Subtitle style={{ position: 'absolute', bottom: '30px'}}>By {article.author}</Card.Subtitle>
            </Card.Body>
        </Card>
    );
}

export default NewsCard;
