import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getTopics } from "../utils/api";

const Navbar = () => {
    const [topics, setTopics] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        getTopics().then(setTopics);
    }, []);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const closeDropdown = () => {
        setShowDropdown(false);
    };

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>News App</h1>
            <nav style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div>
                    <NavLink to='#' onClick={toggleDropdown}>Topics</NavLink>
                    {showDropdown && (
                        <ul style={{ listStyleType: 'none', position: 'absolute', backgroundColor: 'white', padding: 0 }}>
                            {topics.map((topic, index) => (
                                <li key={index} onClick={closeDropdown}>
                                    <NavLink to={`/topic/${topic.slug}`} style={{ display: 'block', padding: '5px' }}>
                                        {topic.slug}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <NavLink to="/">All News</NavLink>
            </nav>
        </>
    );
};

export default Navbar;
