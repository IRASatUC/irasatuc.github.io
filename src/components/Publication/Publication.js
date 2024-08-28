import './Publication.css';
import { Publication_contents_peers_review,Publication_contents_books_chapter,Publication_contents_patents,Publication_contents_peers_review_conference } from '../../contents/Publication_contents/Publication_contents';
import { useState } from 'react';
function dropdownDisplay(id){
  if(  document.getElementById(id).style.display ==="block"){
    document.getElementById(id).style.display = "none";

  }else{
    document.getElementById(id).style.display = "block";

  }
  
}
function PublicationContent(content) {
  switch(content){
    case "peer-review-conference":
      return <ol id="Publication_contents_peer_review_conference" reversed>
        {Publication_contents_peers_review_conference.map((content)=>{
          return(
              <li >
                {content}
              </li>
          )
        })}
      </ol>
    case "peer-review":
        return <ol id="Publication_contents_peer_review" reversed>
                  {Publication_contents_peers_review.map((content)=>{
                    return(
                     content


                    )
                  })}
               </ol>
    case "patents":
      return(
        <ol id="Publication_contents_patents" reversed>
          {Publication_contents_patents.map((content)=>{
            
            return(
              <li>{content}</li>

            ) 
          })}
        </ol>
      )
    case "book-chapters":
      return(
        <ol id="Publication_contents_books_chapter" reversed>
          {Publication_contents_books_chapter.map((content)=>{
            return(
              <li>{content} </li>

            )
          })}
        </ol>
      )
      
    default:
      return <div></div>
  }
}
export default function Publication(){
    const [Content, setContent] = useState("peer-review");
    return(
        <div className='Publication'>
        <h1>Publications</h1>
        <div className='menu-box'>
          <h2 onClick={()=>{setContent("peer-review")}}>Peer-Reviewed Journal Papers</h2>
          
          <h2 onClick={()=>{setContent("peer-review-conference")}}>Peer-Reviewed Conference Papers</h2>
        
          <h2 onClick={()=>{setContent("book-chapters")}}>Book Chapters </h2>

          <h2 onClick={()=>{setContent("patents")}}>Patents </h2>
        </div>
        <div className='content-box'>
          {PublicationContent(Content)}
        </div>
        
        
      </div>
    )
}