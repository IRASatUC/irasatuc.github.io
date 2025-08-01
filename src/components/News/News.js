import NewsCard from '../../reusables/NewsCard/NewsCard';
import { News_contents } from '../../contents/News_contents/News_contents';

export default function News() {
    return (
        <div className='News pl-[10px] no-hamburger:pl-[40px] big_h1'>
            <div>
                <h1 className="text-center no-hamburger:text-left">News</h1>
                <div className="NewsBox flex flex-col items-center w-full no-hamburger:pr-[100px]">
                    { News_contents.map((news, index) => {
                        return (
                            <NewsCard key={index} title={news.title} link={news.link} date={news.date}/>
                        )
                    }) }
                </div>
            </div>
        </div>
    )
}
