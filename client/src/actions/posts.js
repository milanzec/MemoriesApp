import * as api from '../apis';

export const getPosts = () => async (dispatch) => {
  try {
    const response = await api.fetchPosts();
    dispatch({ type: 'FETCH_ALL', payload: response.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createPost(formData);
    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
