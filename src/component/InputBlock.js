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
    return (<div style={styles.inputBlock}>
        <div style={{marginBottom: "10px"}}>
            <div style={styles.inputText}>Author:</div>
            {/* поле ввода автора */}
            <input
                style={{width: "399px"}}
                value={props.comm.newAuthor}
                onChange={ev => props.saveA(ev.target.value, props.comm.newText)}
            />
        </div>
        <div>
            <div style={styles.inputText}>Text:</div>
            {/* поле ввода текста */}
            <textarea
                style={styles.textarea}
                value={props.comm.newText}
                onChange={event => props.saveA(props.comm.newAuthor, event.target.value)} /* можно ли как то по другому передать значения полей в функцию публикации коментария? */
                placeholder={"text you comment"}>
            </textarea>
        </div>
        {/* кнопка создания нового комментария */}
        <div style={styles.button} onClick={props.createComm}>
            Publish
        </div>
    </div>)
}

