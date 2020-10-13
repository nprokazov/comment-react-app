import React from "react";

const styles = {
    commentsBlock: {
        border: "2px solid black",
        marginBottom: "20px"
    },
    deleteBlock: {
        display: "inline-block",
        position: "relative",
        left: "50%",
        marginLeft: "-50px",
        marginBottom: ".5rem",
        border: "2px solid black",
        width: "100px",
        textAlign: "center",
        cursor: "pointer"
    },
}

function CommentBlock(props) {
    return (
        <div style={styles.commentsBlock}>
            <p>Author: {props.comment.author}</p>
            <p>Text: {props.comment.text}</p>
            <div style={styles.deleteBlock} onClick={props.deleteComment.bind(this, props.comment.id)}>удалить &times;</div>
        </div>
    )
}


export default CommentBlock;