import React from "react";

let styles = {
    inputBlock: {
        position: "fixed",
        bottom: "0"
    },
    inputText: {
        display: "inline-block",
        verticalAlign: "top",
        width: "50px"
    },
    textarea: {
        height: "50px",
        width: "400px"
    },
    button: {
        position: "relative",
        width: "100px",
        border: "2px solid black",
        textAlign: "center",
        left: "50%",
        marginLeft: "-50px",
        cursor: "pointer",
        marginBottom: "10px"
    }
}

export default function InputBlock(props) {
    const { newAuthor, newText} = props.newComment;
    const {saveNewComment, createComment} = props;

    return (<div style={styles.inputBlock}>
        <div style={{marginBottom: "10px"}}>
            <div style={styles.inputText}>Author:</div>
            {/* поле ввода автора */}
            <input
                style={{width: "399px"}}
                value={newAuthor}
                onChange={ev => saveNewComment(ev.target.value, newText)}
            />
        </div>
        <div>
            <div style={styles.inputText}>Text:</div>
            {/* поле ввода текста */}
            <textarea
                style={styles.textarea}
                value={newText}
                onChange={event => saveNewComment(newAuthor, event.target.value)}
                placeholder={"text you comment"}>
            </textarea>
        </div>
        {/* кнопка создания нового комментария */}
        <div style={styles.button} onClick={createComment}>
            Publish
        </div>
    </div>)
}

