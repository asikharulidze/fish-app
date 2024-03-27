import FishCard from "../Cards/FishCard";
import "./wrapper.css";
import { nanoid } from 'nanoid'

const FishWrapper = ({ fishes }) =>{
    console.log("list", fishes);

    const cardClickedDone = (name)=>{
        console.log(`Card: ${name}`);
    }
    return(
        <div className="fish-wrapper">
            {fishes.map((fish)=>{
                return(
                    <FishCard 
                    key={nanoid()}
                    src={fish.illustrationPhoto.src} 
                    alt={fish.illustrationPhoto.alt} 
                    title={fish.scientificName}
                    region={fish.region}
                    name={fish.name}
                    info={fish.info}
                    cardClickd={({name})=>cardClickedDone(name)}
                    />
                )
            })}
        </div>
    );
}

export default FishWrapper;