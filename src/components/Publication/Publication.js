import './Publication.css';
import { Publication_contents_peers_review,Publication_contents_books_chapter,Publication_contents_patents,Publication_contents_peers_review_conference } from '../../contents/Publication_contents/Publication_contents';
function dropdownDisplay(id){
  if(  document.getElementById(id).style.display ==="block"){
    document.getElementById(id).style.display = "none";

  }else{
    document.getElementById(id).style.display = "block";

  }
  
}
export default function Publication(){
    
    return(
        <div className='Publication'>
        <h1>Publications</h1>
        <h2 onClick={()=>{dropdownDisplay("Publication_contents_peer_review")}}>Peer-Reviewed Journal Papers</h2>
        <ol id="Publication_contents_peer_review" reversed>
          {Publication_contents_peers_review.map((content)=>{
            return(
              <li>{content.authors}; {content.title}, <i>{content.journal}</i>,{content.volume}.{content.issue} {content.year}.<a href={"https://"+content.doi}>{content.doi}</a></li>


            )
          })}
        </ol>
        <h2 onClick={()=>{dropdownDisplay("Publication_contents_peer_review_conference")}}>Peer-Reviewed Conference Papers</h2>
        <ol id="Publication_contents_peer_review_conference" reversed>
          {Publication_contents_peers_review_conference.map((content)=>{
            return(
              <li>{content.authors}; {content.title}, <i>{content.journal}</i>,{content.volume}.{content.issue} {content.year}.<a href={"https://"+content.doi}>{content.doi}</a></li>

            )
          })}
        </ol>
        <h2 onClick={()=>{dropdownDisplay("Publication_contents_books_chapter")}}>Book Chapters </h2>
        <ol id="Publication_contents_books_chapter" reversed>
          {Publication_contents_books_chapter.map((content)=>{
            return(
              <li>{content.authors}; {content.title}, <i>{content.journal}</i>,{content.volume}.{content.issue} {content.year}.<a href={"https://"+content.doi}>{content.doi}</a></li>

            )
          })}
        </ol>
        <h2 onClick={()=>{dropdownDisplay("Publication_contents_patents")}}>Patents </h2>
        <ol id="Publication_contents_patents" reversed>
          {Publication_contents_patents.map((content)=>{
            return(
              <li>{content.authors}; {content.title}, <i>{content.journal}</i>,{content.volume}.{content.issue} {content.year}.<a href={"https://"+content.doi}>{content.doi}</a></li>

            )
          })}
        </ol>
        
        
      </div>
    )
}