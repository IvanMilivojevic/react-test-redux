import Axios from "../Axios/AxiosPosts";

const postsFetch = () => {
  return (dispatch) => {
    Axios.get("/posts")
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

export default postsFetch;
