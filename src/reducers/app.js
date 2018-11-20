import types from "../actions/app/types";

const initialState = {
  posts: {
    entities: {},
    result: [],
  },
  users: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_POSTS:
      return {
        ...state,
        posts: payload
      };

    case types.GET_USERS:
      return {
        ...state,
        users: payload
      };

    default:
      return state;
  }
};
