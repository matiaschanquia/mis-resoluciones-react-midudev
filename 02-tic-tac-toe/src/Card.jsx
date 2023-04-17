

const Card = (props) => {
    return(
        <div className="container-card" onClick={() => props.actualizarState(props.index1, props.index2)}>
            {
                props.state === 0 ? "" : props.state === "red" ? <h2>❌</h2> : <h2>⚪</h2>
            }
        </div>
    )
}

export default Card;