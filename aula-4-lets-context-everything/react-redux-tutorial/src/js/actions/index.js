import { ADD_ARTICLE } from "../constants/action-types";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload };
}

export function getData() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
            return { type: "DATA_LOADED", payload: json };
        });
}