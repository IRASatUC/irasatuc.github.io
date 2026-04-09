import "./News.css";
import { News_contents } from "../../contents/News_contents/News_contents";

function NewsLinkWrapper({ href, className = "", children }) {
    if (href && href.length > 0) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className={className}
            >
                {children}
            </a>
        );
    }

    return <div className={className}>{children}</div>;
}

function NewsTextCard({ news }) {
    return (
        <div className="news-text-card square-2xl bg-white p-5 flex flex-col justify-between">
            <div>
                <p className="text-brighter-blue text-xs font-semibold uppercase tracking-[0.18em] mb-3">
                    News
                </p>

                <h3 className="text-lg md:text-xl font-semibold leading-snug mb-3">
                    {news.link ? (
                        <a
                            href={news.link}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                        >
                            {news.title}
                        </a>
                    ) : (
                        news.title
                    )}
                </h3>

                <p className="text-sm text-gray-700 leading-6 news-summary-clamp">
                    {news.summary}
                </p>
            </div>

            <p className="text-sm text-gray-500 mt-4">{news.date}</p>
        </div>
    );
}

export default function News() {
    const featuredNews = News_contents[0];
    const otherNews = News_contents.slice(1);

    return (
        <div className="News px-[12px] no-hamburger:px-[40px] big_h1">
            <div className="max-w-[1400px] mx-auto">
                <h1 className="text-center no-hamburger:text-left mb-8">News</h1>

                <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20 items-stretch">
                    <NewsLinkWrapper
                        href={featuredNews.link}
                        className="news-photo-card block overflow-hidden square-2xl"
                    >
                        <img
                            src={featuredNews.image}
                            alt={featuredNews.title}
                            className="w-full h-full object-cover featured-news-image"
                        />
                    </NewsLinkWrapper>

                    <div className="featured-news-text square-2xl bg-white p-6 md:p-8 flex flex-col justify-center">
                        <p className="text-brighter-blue text-sm font-semibold uppercase tracking-[0.18em] mb-3">
                            Latest News
                        </p>

                        <h2 className="text-2xl md:text-4xl font-semibold leading-tight mb-4">
                            {featuredNews.link ? (
                                <a
                                    href={featuredNews.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:underline"
                                >
                                    {featuredNews.title}
                                </a>
                            ) : (
                                featuredNews.title
                            )}
                        </h2>

                        <p className="text-gray-500 text-sm mb-4">{featuredNews.date}</p>

                        <p className="text-base md:text-lg leading-7 text-gray-700">
                            {featuredNews.summary}
                        </p>
                    </div>
                </section>

                <section className="flex flex-col gap-20 pb-10">
                    {otherNews.map((news, index) => {
                        const imageFirst = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className="grid grid-cols-1 md:grid-cols-3 gap-4"
                            >
                                {imageFirst ? (
                                    <>
                                        <NewsLinkWrapper
                                            href={news.link}
                                            className="md:col-span-2 news-photo-card block overflow-hidden square-2xl"
                                        >
                                            <img
                                                src={news.image}
                                                alt={news.title}
                                                className="w-full h-full object-cover news-row-image"
                                            />
                                        </NewsLinkWrapper>

                                        <NewsTextCard news={news} />
                                    </>
                                ) : (
                                    <>
                                        <NewsTextCard news={news} />

                                        <NewsLinkWrapper
                                            href={news.link}
                                            className="md:col-span-2 news-photo-card block overflow-hidden square-2xl"
                                        >
                                            <img
                                                src={news.image}
                                                alt={news.title}
                                                className="w-full h-full object-cover news-row-image"
                                            />
                                        </NewsLinkWrapper>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </section>
            </div>
        </div>
    );
}