import React from "react";
import ReactDOM from "react-dom";
import CommentBlock from "./component/CommentBlock";
import InputBlock from "./component/InputBlock";
import "./CSS/main.css";
import store from "./redux/store";
import { connect } from "react-redux";
import { deleteCom, saveNewComment, createComment } from "./redux/action";
import comments from "./redux/reducer";

let App = (props) => {

    const {
        comments, deleteCom, saveNewComment, newComment, createComment
    } = props;

    return (
        <div>
            <CommentBlock comments = {comments} deleteCom = {deleteCom}/>
            <InputBlock newComment={newComment} createComment={createComment} saveNewComment={saveNewComment}/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        comments: state.comments,
        newComment: state.newComment
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteCom: (id) =>dispatch(deleteCom(id)),
        saveNewComment: (author, text) => dispatch(saveNewComment(author, text)),
        createComment: () => dispatch(createComment())
    }
}

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

ReactDOM.render(
    <App store = {store}/>,
    document.querySelector("#react-input")
);


// Создаем конструктор
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         // Использовал тернарный оператор для присвоения значения из LocalStorage
//         this.state = (localStorage.getItem("1") !== null) ? JSON.parse(localStorage.getItem("1")) :
//             {
//             commentList: [
//                 {id: 1, author: "Alex", text: "Hello, I'm Alex"},
//                 {id: 2, author: "Nikita", text: "Hello, I'm Nikita"},
//             ],
//             newComment: {newAuthor: "", newText: ""},
//             keyCount: 2
//         };
//         this.deleteComment = this.deleteComment.bind(this); //Функция удаления комментария
//         this.saveAuthor = this.saveAuthor.bind(this); //функция сохранения полей ввода
//         this.createComment = this.createComment.bind(this); //Функция создания нового коментария
//         this.incrementCount = this.incrementCount.bind(this);// Счетчик для создания id так как решил что каждый раз проверять все id и вставлять незанятый слишком накладно
//     }
//
//     deleteComment(key) {
//         let commentList = this.state.commentList;
//         this.setState(this.state.commentList = commentList.filter(test => {
//             if (test.id !== key) return test
//         }));
//         localStorage.setItem("1", JSON.stringify(this.state));
//     }
//
//     saveAuthor(d, c) {
//         this.setState(this.state.newComment = {newAuthor: d, newText: c})
//     }
//
//     createComment() {
//         this.state.commentList.push({
//             id: this.incrementCount(),
//             author: this.state.newComment.newAuthor,
//             text: this.state.newComment.newText
//         });
//         this.setState(this.state.newComment = {newAuthor: "", newText: ""});
//         localStorage.setItem("1", JSON.stringify(this.state));
//         console.log(this.state);
//     }
//
//     incrementCount() {
//         return ++this.state.keyCount;
//     }
//
//     render() {
//         return (
//             <div>
//                 {/* сделал отдельный элемен комменатрий */}
//                 {this.state.commentList.map(comm => {
//                     return <CommentBlock comment={comm} key={comm.id} deleteComment={this.deleteComment}/>
//                 })}
//                 {/* и отдельный элемент ввода текста и автора */}
//                 <InputBlock comm={this.state.newComment} createComm={this.createComment} saveA={this.saveAuthor}/>
//             </div>
//         )
//     }
//
// }