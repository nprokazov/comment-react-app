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

    const {comments, deleteCom} = props;

    return comments.map(comment => {
            return <div style={styles.commentsBlock} key={comment.id}>
                <p>Author: {comment.author}</p>
                <p>Text: {comment.text}</p>
                <div style={styles.deleteBlock} onClick={event => deleteCom(comment.id)}>удалить &times;</div>
            </div>
    });
}


export default CommentBlock;