const comments = (state, action) => {

    console.log(state);

    switch (action.type) {
        case 'DELETE':
            return Object.assign({}, state, {
                comments: state.comments.filter(test => {
                    if (test.id !== action.id) return test
                })
            });

        case "SAVE_COMMENT":
            return Object.assign({}, state, {newComment: {newAuthor: action.author, newText: action.text}});

        case "CREATE_COMMENT":
            state.comments.push(
                {
                    id: ++state.keyCount,
                    author: state.newComment.newAuthor,
                    text: state.newComment.newText,
                });
            state.newComment.newAuthor = "";
            state.newComment.newText = "";
            localStorage.setItem("1", JSON.stringify(state));
            return JSON.parse(JSON.stringify(state));

        default:
            return state;
    }
};

export default comments;
// Есть ли еще способы создания нового объекта? При использовании редакс стэйт создается для каждоко компонента или на все приложение одиин общий стэйт?
// Если я захочу реализовать функцию например ее лучше реализовывать в редусере или отдельно и экспортировать? Нормальная ли практика использовать джейсон парс джейсон стрингифай