import { useState } from "react";
import Modal from "../Modal/Modal";
import "../Modal/Modal.css";

const FishCard = ({src, alt, name, title, region, info, cardClickd}) =>{
    const[IsShowing, setIsShowing]  = useState(false);
    const [likes, setLikes] = useState(0);

    const handleClick = ()=>{
        //console.log(name);
        cardClickd({name});
    };
    const showCard = ()=>{
        setIsShowing(true);
    }
    const handleLikesClick = ()=>{
            setLikes(likes+1);        
    }
    const handleDislikesClick = ()=>{
        
        if(likes>0){
            setLikes(likes-1);
        }
    }
    return(
        <>
        <div className="fish-card" onClick={()=>handleClick()}>
            <img src={src} alt={alt} />
            <div className="container">
                <h3>{name}</h3>
                <p className="right">{region}</p>
                <h4 className="title">{title}</h4>
                
            </div>
            <div className="card-footer">
                <button className="likebtn" onClick={()=>showCard()}>Details</button>
            </div>

        </div>
        { IsShowing && <Modal 
                        Header={name} 
                        onClose={()=>setIsShowing(false)}
                        likes={likes}
                        onLike={()=>handleLikesClick()}
                        onDislike={()=>handleDislikesClick()}
                        >
            {info}
            </Modal>}
        </>
    );

    
}
export default FishCard;