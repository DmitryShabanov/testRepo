import { createSelector } from "reselect";

const result = state => state.app.posts.result;
const posts = state => state.app.posts.entities.posts;
const users = state => state.app.posts.entities.users;
const comments = state => state.app.posts.entities.comments;

export const postsSelector = createSelector(
  [ result, posts, users, comments ],
  (result, posts, users, comments) => result.map(postId => {
    const post = posts[postId];
    const author = users[post.author].name;
    const resultComments = post.comments.map(commentId => {
      const comment = comments[commentId];

      return {
        ...comment,
        commenter: users[comment.commenter].name,
      };
    });

    return {
      ...post,
      author,
      comments: resultComments,
    };
  }),
);
