import './Publication.css';
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
            <div className='menu-box flex'>
                <h2 style={{transition: "0.3s", color: (Content==="peer-review"?"rgb(55,66,91)":"black")}} onClick={()=>{setContent("peer-review")}}>
                    Peer-Reviewed Journal Papers</h2>

                <h2 style={{transition: "0.3s", color: (Content==="peer-review-conference"?"rgb(55,66,91)":"black")}} onClick={()=>{setContent("peer-review-conference")}}>
                    Peer-Reviewed Conference Papers</h2>

                <h2 style={{transition: "0.3s", color: (Content==="book-chapters"?"rgb(55,66,91)":"black")}} onClick={()=>{setContent("book-chapters")}}>
                    Book Chapters</h2>

                <h2 style={{transition: "0.3s", color: (Content==="patents"?"rgb(55,66,91)":"black")}} onClick={()=>{setContent("patents")}}>
                    Patents</h2>
            </div>
            <div className='content-box p-[40px] border-[1px] border-solid border-black'>
                { PublicationContent(Content) }
            </div>
        </div>
    )
}
