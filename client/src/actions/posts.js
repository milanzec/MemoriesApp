import * as api from '../apis';

const getPosts = () => async (dispatch) => {
  try {
    const response = await api.fetchPosts();
    dispatch({ type: 'FETCH_ALL', payload: response.data });
  } catch (error) {
    console.log(error.message);
  }
};

export default getPosts;
