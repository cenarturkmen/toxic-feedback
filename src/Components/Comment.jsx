

const Comment = (props) => {
    return (
        <div className="comment">
        {props.name}
        {props.mail}
        {props.toxicity}
        </div>
    );

}

export default Comment;