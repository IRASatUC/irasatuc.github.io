import './Publications.css';
import { Publication_contents_peers_review, Publication_contents_books_chapter, Publication_contents_patents, Publication_contents_peers_review_conference } from '../../contents/Publication_contents/Publication_contents';
import { useState } from 'react';

function id_and_source_from_content(content) {
    switch (content) {
        case "peer-review-conference":
            return ["Publication_contents_peer_review_conference", Publication_contents_peers_review_conference];
        case "peer-review":
            return ["Publication_contents_peer_review", Publication_contents_peers_review];
        case "patents":
            return ["Publication_contents_patents", Publication_contents_patents];
        case "book-chapters":
            return ["Publication_contents_books_chapter", Publication_contents_books_chapter];
        default:
            return [null, null];
    }
}

function PublicationContent(content) {
    const [ol_id, source] = id_and_source_from_content(content);
    return ( ol_id ?
        <ol className="list-decimal" id={ol_id} reversed>
            { source.map((content, index)=>{
                return (
                    <li key={index}>
                        {content}
                    </li>
                )
            }) }
        </ol> :
        null );
}

export default function Publication() {
    const [Content, setContent] = useState("peer-review");

    return(
        <div className='Publication big_h1 pl-[20px] no-hamburger:pl-[50px] pb-10 w-[90%]'>
            <h1 className="text-center no-hamburger:text-left">Publications</h1>
            <div className='menu-box flex overflow-x-scroll w-full sticky top-[105px] border-b-[1px] border-black bg-white'>
                <h2 className={"duration-[0.3s] min-w-[250px] content-center" + (Content==="peer-review"?" text-brighter-blue":" text-black")} onClick={()=>{setContent("peer-review")}}>
                    Peer-Reviewed Journal&nbsp;Papers</h2>

                <h2 className={"duration-[0.3s] min-w-[250px] content-center" + (Content==="peer-review-conference"?" text-brighter-blue":" text-black")} onClick={()=>{setContent("peer-review-conference")}}>
                    Peer-Reviewed Conference&nbsp;Papers</h2>

                <h2 className={"duration-[0.3s] min-w-[250px] content-center" + (Content==="book-chapters"?" text-brighter-blue":" text-black")} onClick={()=>{setContent("book-chapters")}}>
                    Book Chapters</h2>

                <h2 className={"duration-[0.3s] min-w-[250px] content-center" + (Content==="patents"?" text-brighter-blue":" text-black")} onClick={()=>{setContent("patents")}}>
                    Patents</h2>
            </div>
            <div className='content-box px-[45px] py-4 border-[1px] border-t-0 border-solid border-black'>
                { PublicationContent(Content) }
            </div>
        </div>
    )
}
