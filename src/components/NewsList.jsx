import { useState, useEffect } from "react"
import NewsCard from './NewsCard'
import { Link } from 'react-router-dom'
import { getArticles, getTopics } from '../utils/api'
import { useSearchParams } from 'react-router-dom';
import { Row, Col, Form } from 'react-bootstrap';
import Error from './Error'
import './NewsList.css'
const NewsList = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [topics, setTopics] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const [err, setErr] = useState(null)

    const fetchArticles = async () => {
        setIsLoading(true);
        setErr(null);
        try {
            const data = await getArticles(searchParams);
            setNews(data);
        } catch (err) {
            setErr("error from getArticles " + err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchTopics = async () => {
        try {
            const topicsData = await getTopics();
            setTopics(topicsData);
        } catch (err) {
            setErr("error from getTopics " + err.message)
        }
    };

    useEffect(()=>{
        fetchTopics();
    },[topics])
    const handleSortChange = (e) => {
        const value = e.target.value;
        setSearchParams({ sort_by: value, order: searchParams.get('order') || 'desc' });
    };

    const handleOrderChange = (e) => {
        const value = e.target.value;
        setSearchParams({ order: value, sort_by: searchParams.get('sort_by') || 'date' });
    };
    const handleTopicChange = (e) => {
        const value = e.target.value;
        setSearchParams({ topic: value, sort_by: searchParams.get('sort_by') || 'date', order: searchParams.get('order') || 'desc' });
    };



    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (err) {
        return <Error message={err} />
    }

    return (
        <>  
          <Row className="custom-row">
            <Col>
                <label>Select topic:</label>
                <Form.Select aria-label="Topic" onChange={handleTopicChange} value={searchParams.get('topic') || ''} className="select-box">
                    <option value="">All</option>
                    {topics.map(topic => (
                        <option key={topic.slug} value={topic.slug}>{topic.slug}</option>
                    ))}
                </Form.Select>
            </Col>

            <Col>
                <label>Sort by:</label>
                <Form.Select aria-label="Sort by" onChange={handleSortChange} value={searchParams.get('sort_by') || 'date'} className="select-box">
                    <option value="date">Date</option>
                    <option value="comment_count">Comment Count</option>
                    <option value="votes">Votes</option>
                </Form.Select>
            </Col>

            <Col>
                <label>Order:</label>
                <Form.Select aria-label="Order" onChange={handleOrderChange} value={searchParams.get('order') || 'desc'} className="select-box">
                    <option value="desc">Descending</option>
                    <option value="asc">Ascending</option>
                </Form.Select>
            </Col>
<Col><button onClick={()=>{fetchArticles()}}>Search</button></Col>
            
        </Row>

            <Row className="justify-content-center">
                {news.map((article) => (
                    <Col xs={12} md={6} key={article.article_id} className="d-flex justify-content-center">
                        <Link to={`/articles/${article.article_id}`} style={{ textDecoration: 'none', color: 'black' }}>
                            <NewsCard article={article} /> </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default NewsList
