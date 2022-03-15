

const Comment = (props) => {
    return (
        <div className="text-xl py-8 text-white text-center">
        {props.name}
        {props.mail}
        {props.toxicity}
        </div>
    );

}

export default Comment;