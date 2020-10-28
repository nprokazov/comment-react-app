import {createStore} from "redux";
import comments from "./reducer"

const initialState = (localStorage.getItem("1") !== null) ? JSON.parse(localStorage.getItem("1")) :
    {
        comments: [
            {id: 1, author: "Alex", text: "Hello, I'm Alex"},
            {id: 2, author: "Nikita", text: "Hello, I'm Nikita"},
        ],
        newComment: {newAuthor: "", newText: ""},
        keyCount: 2
    };

const store = createStore(comments, initialState);

export default store;