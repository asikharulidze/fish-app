const FishCard = ({src, alt, name, title, region, info, cardClickd}) =>{
    const handleClick = ()=>{
        //console.log(name);
        cardClickd({name});
    };

    return(
        <div className="fish-card" onClick={()=>handleClick()}>
            <img src={src} alt={alt} />
            <h3>{name}</h3>
            <p className="right">{region}</p>
            <h4 className="title">{title}</h4>
            <p>{info}</p>
        </div>
    );
}
export default FishCard;