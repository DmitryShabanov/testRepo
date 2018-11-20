import { normalize, schema } from 'normalizr';
import types from "./types";

export const getPosts = () => async dispatch => {
  const response = await fetch("http://localhost:3000/posts");
  const data = await response.json();

  const userSchema = new schema.Entity('users');
  const commentSchema = new schema.Entity('comments', {
    commenter: userSchema,
  });
  const commentListSchema = [ commentSchema ];
  const postSchema = new schema.Entity('posts', {
    author: userSchema,
    comments: commentListSchema,
  });
  const postListSchema = [ postSchema ];

  const payload = normalize(data, postListSchema);

  dispatch({
    type: types.GET_POSTS,
    payload
  });
};

// export const getUsers = () => async dispatch => {
//   const response = await fetch("http://localhost:3000/users");
//   const payload = await response.json();

//   dispatch({
//     type: types.GET_USERS,
//     payload
//   });
// };
