import './Card.css';

function card (props) {
    return <div className="card">{props.children}</div>;
}

export default card;

//meant to be a reusable component