import { useState, useEffect } from "react"
import NewsCard from './NewsCard'
import { Link } from 'react-router-dom'
import { getArticles, getTopics } from '../utils/api'
import { useSearchParams } from 'react-router-dom';
import { Row, Col, Form } from 'react-bootstrap';
import Error from './Error'
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
    useEffect(() => {
        fetchArticles();
    }, [searchParams]);

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
         <Row  style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', margin:'30px 300px'}}>
        <Col>
        Select topic:
            <Form.Select aria-label="Topic" onChange={handleTopicChange} value={searchParams.get('topic') || ''} style={{ width:'120px',margin: '10px' }}>
                <option value="">All</option>
                {topics.map(topic => (
                    <option key={topic.slug} value={topic.slug}>{topic.slug}</option>
                ))}
            </Form.Select>
        </Col>

        <Col>
        Sort by:
            <Form.Select aria-label="Sort by" onChange={handleSortChange} value={searchParams.get('sort_by') || 'date'} style={{ width:'120px',margin: '10px' }}>
                <option value="date">Date</option>
                <option value="comment_count">Comment Count</option>
                <option value="votes">Votes</option>
            </Form.Select>
        </Col>

        <Col>
        Order:
            <Form.Select aria-label="Order" onChange={handleOrderChange} value={searchParams.get('order') || 'desc'} style={{ width:'120px',margin: '10px' }}>
                <option value="desc">Descending</option>
                <option value="asc">Ascending</option>
            </Form.Select>
        </Col>
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
