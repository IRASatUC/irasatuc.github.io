
import './News.css';
import NewsCard from '../../reusables/NewsCard/NewsCard';
import { News_contents } from '../../contents/News_contents/News_contents';
export default function News() {
    return (
        <div className='News'>
            <div>
                <h1>News</h1>
                <div className="NewsBox">
                {News_contents.map((news) => {
                    return (
                        <NewsCard title={news.title} link={news.link} date={news.date}/>
                    )
                }
                
                )}
                </div>
                
            </div>
        </div>
    )
}