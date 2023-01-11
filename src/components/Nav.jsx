import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as api from '../utils/api'

function Nav() {

    const [topics, setTopics] = useState([])

    useEffect(() => {
        async function fetchTopics() {
            let request = await api.getTopics();
            setTopics(request)
        }

        fetchTopics()
    },[])

    return (
        <nav>
            <ul id="topics_ul">
                <li key='Home'><Link to='/' id='topic' className={'topic_home'}>All</Link></li>
                {topics.map((topic,index) => <li key={topic.slug}><Link to={topic.slug} id='topic' className={`topic_${topic.slug}`}>{topic.slug}</Link></li>)}
            </ul>
        </nav>
    )
}

export default Nav;

