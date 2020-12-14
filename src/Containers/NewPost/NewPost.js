import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Axios from "../../Axios/AxiosUserPosts";
import styles from "./NewPost.module.css";
import FormField from "../../Components/UI/FormField";

const NewPost = (props) => {
  const [formAll, setForm] = useState([
    { name: "title", placeholder: "Post Title", type: "input", value: "", required: true, valid: false },
    { name: "content", placeholder: "Post Content", type: "textarea", value: "", required: true, valid: false },
    {
      name: "category",
      type: "select",
      value: "Select Category ...",
      options: [
        { value: "Nature", display: "Nature and Life" },
        { value: "Medicine", display: "Medicine and Chemistry" },
      ],
      required: true,
      valid: false,
    },
  ]);
  const [formSubmiting, setFormSubmiting] = useState(false);

  const inputValidation = (value) => {
    const inputValue = value.trim();

    return inputValue !== "";
  };

  const changeValueHandler = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const fieldValid = inputValidation(fieldValue);

    setForm((prevForm) => {
      const updatedForm = [...prevForm];
      const updatedField = { ...updatedForm.find((f) => f.name === fieldName) };
      const updatedFieldIndex = updatedForm.findIndex((f) => f.name === fieldName);
      updatedField.value = fieldValue;
      updatedField.valid = fieldValid;
      updatedForm[updatedFieldIndex] = updatedField;

      return updatedForm;
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();

    if (props.isAuthorized) {
      const shouldSubmit = formAll.every((field) => field.valid);

      if (shouldSubmit) {
        const formData = {};
        formAll.forEach((field) => {
          formData[field.name] = field.value;
        });

        Axios.post(`/posts.json?auth=${props.token}`, formData)
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });
      }

      setFormSubmiting(true);
    } else {
      props.onAuthRedirect("/new-post");
      props.history.push("/auth");
    }
  };

  return (
    <div className={styles.FormWrapper}>
      <h2>New Post Form:</h2>
      <form>
        {formAll.map((field) => (
          <FormField {...field} changed={changeValueHandler} key={field.name} checker={formSubmiting} />
        ))}
        <button type="submit" className={styles.SubmitButton} onClick={formSubmit}>
          {props.isAuthorized ? "Submit" : "Log In to Submit Post"}
        </button>
      </form>
    </div>
  );
};

NewPost.propTypes = {
  token: PropTypes.string,
  isAuthorized: PropTypes.bool,
  onAuthRedirect: PropTypes.func,
  history: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    token: state.ath.token,
    isAuthorized: !!state.ath.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthRedirect: (path) => dispatch({ type: "AUTH_REDIRECT", path }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
