import React, { useEffect, useState } from "react";
import FishCard from "../Cards/FishCard";
import Modal from "../Modal/Modal";
import "./wrapper.css";
import { nanoid } from 'nanoid'
import CreateCardForm from "../CreateCardForm/CreateCardForm";

const FishWrapper = ({ fishes }) =>{
    const [createCard, setCreateCard] = useState (false);
    const [cardList, setCardList]   = useState (fishes);
    const cardClickedDone = (name)=>{
        console.log(`Card: ${name}`);
    }

    const handleCardSubmit = (fish) =>{
        if(fish){
            setCardList((prevCards)=>{
              return [...prevCards, fish]
            });
           setCreateCard(false);
        }
        
        console.log(`Card: ${fish}`);
    };

    useEffect(() =>{
        const timeoutId= setTimeout(() =>{
            console.log(`List changed!`);
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [cardList]);

    return(
        <div className="fish-wrapper">
            <button onClick={()=> setCreateCard(true)} className="likebtn"> Add Card </button>
            {createCard && <Modal 
                            Header="Create New Card"
                            onClose={()=>setCreateCard(false)}
                            >
                                <CreateCardForm onCardSubmit={handleCardSubmit} />
                            </Modal>}
            <div className="card-container">
                {cardList.map((fish)=>{
                return(
                    <FishCard 
                    key={nanoid()}
                    src={fish?.illustrationPhoto?.src || "fishes/demo.jpg"} 
                    alt={fish?.illustrationPhoto?.alt || "no image"} 
                    title={fish.scientificName}
                    region={fish.region}
                    name={fish.name}
                    info={fish.info}
                    cardClickd={({name})=>cardClickedDone(name)}
                    />
                )
                })}
            </div>
            
        </div>
    );
}

export default FishWrapper;