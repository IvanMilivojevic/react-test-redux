import AxiosDefault from "axios";
import AxiosPosts from "../Axios/AxiosPosts";

export const postsFetch = () => {
  return (dispatch) => {
    AxiosPosts.get("/posts")
      .then((response) => {
        console.log(response);
        const posts = response.data.slice(0, 4);
        for (let i = 0; i < posts.length; i += 1) {
          posts[i].author = "Ivan";
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
