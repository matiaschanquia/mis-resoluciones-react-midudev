import { useEffect, useState } from "react"

const Card = (props) => {
    const [isFollow, setIsFollow] = useState(props?.isFollow ?? false);
    const [textButton, setTextButton] = useState();
    const [hizoClick, setHizoClick] = useState(false);

    useEffect(() => {
        if(hizoClick && isFollow) {
            setTextButton("Dejar de seguir")
        } else {
            setTextButton(isFollow ? "Siguiendo" : "Seguir");
        }
        setHizoClick(false)
    }, [isFollow])

    const handleMouseOver = () => {
        if(isFollow) {
            setTextButton("Dejar de seguir");
        }
    };

    const handleMouseOut = () => {
        if(isFollow) {
            setTextButton("Siguiendo");
        }
    };

    const handleClick = () => {
        setHizoClick(true);
        setIsFollow(!isFollow);
    }

    return (
        <div className="container-card">
            <div className="container-avatar">
                <img src={`https://unavatar.io/${props.user}`} alt={props.user} />
            </div>
            <div className="container-data">
                <h2>{props.name}</h2>
                <h3>@{props.user}</h3>
            </div>
            <button className={`btn-follow ${isFollow && "isFollow"}`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleClick}>{textButton}</button>
        </div>
    )
}

export default Card;