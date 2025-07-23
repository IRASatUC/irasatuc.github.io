import './Publications.css';
import { Publication_contents_peers_review, Publication_contents_books_chapter, Publication_contents_patents, Publication_contents_peers_review_conference } from '../../contents/Publication_contents/Publication_contents';
import { useState } from 'react';

/*function dropdownDisplay(id) {
    let elem = document.getElementById(id)
    elem.style.display = (elem.style.display.charAt(0) === 'b') ? "none" : "block";
}*/

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
        <div className='Publication big_h1 pl-[20px] no-hamburger:pl-[50px] w-[90%]'>
            <h1>Publications</h1>
            <div className='menu-box flex overflow-x-scroll w-full sticky top-0 border-b-[1px] border-black bg-white'>
                <h2 className={"duration-[0.3s] min-w-[250px] content-center" + (Content==="peer-review"?" text-[rgb(55,66,91)]":" text-black")} onClick={()=>{setContent("peer-review")}}>
                    Peer-Reviewed Journal Papers</h2>

                <h2 className={"duration-[0.3s] min-w-[250px] content-center" + (Content==="peer-review-conference"?" text-[rgb(55,66,91)]":" text-black")} onClick={()=>{setContent("peer-review-conference")}}>
                    Peer-Reviewed Conference Papers</h2>

                <h2 className={"duration-[0.3s] min-w-[250px] content-center" + (Content==="book-chapters"?" text-[rgb(55,66,91)]":" text-black")} onClick={()=>{setContent("book-chapters")}}>
                    Book Chapters</h2>

                <h2 className={"duration-[0.3s] min-w-[250px] content-center" + (Content==="patents"?" text-[rgb(55,66,91)]":" text-black")} onClick={()=>{setContent("patents")}}>
                    Patents</h2>
            </div>
            <div className='content-box p-[40px] border-[1px] border-t-0 border-solid border-black'>
                { PublicationContent(Content) }
            </div>
        </div>
    )
}
