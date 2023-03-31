import axios from "axios";
import { createEvent, createStore } from "effector";

export const updateComments = createEvent<any>();
export const $comments = createStore<any>([]).on(updateComments, (_, newComments) => newComments);
export const updatePosts = createEvent<[]>();
export const $posts = createStore<[]>([]).on(updatePosts, (_, newPost) => newPost);
export const updateToken = createEvent<string>();
export const $token = createStore<string>("").on(updateToken, (_, newToken) => newToken);

export const updateComment = createEvent<string>();
export const $comment = createStore<string>("").on(updateComment, (_, newComment) => newComment);
export const updateCount = createEvent<number>();
export const $count = createStore<number>(0).on(updateCount, (_, newCount) => newCount);
export const updateId = createEvent<string>();
export const $id = createStore<string>("").on(updateId, (_, newId) => newId);
export const updateSelftext = createEvent<string>();
export const $selftext = createStore<string>("").on(updateSelftext, (_, newsf) => newsf);
export const updateTitle = createEvent<string>();
export const $title = createStore<string>("").on(updateTitle, (_, newTitle) => newTitle);
export const updateLoading = createEvent<boolean>();
export const $loading = createStore<boolean>(false).on(updateLoading, (_, newLoading) => newLoading);
export const updateForm = createEvent<string>();
export const $formState = createStore<string>("").on(updateForm, (_, newForm) => newForm);
