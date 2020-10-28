
export const deleteCom = (id) => {
    return {
        type: "DELETE",
        id: id
    }
};

export const saveNewComment = (author, text) => {
    return {
        type: "SAVE_COMMENT",
        author: author,
        text: text,
    }
}

export const createComment = () => {
    return {
        type: "CREATE_COMMENT",
    }
}