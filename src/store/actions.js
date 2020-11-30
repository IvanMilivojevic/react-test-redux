import AxiosDefault from "axios";
import AxiosPosts from "../Axios/AxiosUserPosts";

export const postsFetch = (token) => {
  return (dispatch) => {
    AxiosPosts.get(`/posts.json?auth=${token}`)
      .then((response) => {
        console.log(response);
        const posts = [];
        const postsIds = Object.keys(response.data);

        for (let i = 0; i < postsIds.length; i += 1) {
          const post = response.data[postsIds[i]];
          post.id = postsIds[i];
          posts.push(post);
        }

        dispatch({ type: "POSTS_FETCHED", posts });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

export const authUser = (authData, isSignUp) => {
  return (dispatch) => {
    dispatch({ type: "AUTH_START" });
    let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDaFGuA2QfceDnTdjRnzirtKQzC4X3CpIU";

    if (!isSignUp) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDaFGuA2QfceDnTdjRnzirtKQzC4X3CpIU";
    }

    AxiosDefault.post(url, authData)
      .then((res) => {
        console.log(res);
        dispatch({ type: "AUTH_SUCCESS", payload: { token: res.data.idToken, userId: res.data.localId } });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: "AUTH_FAIL", error });
      });
  };
};
