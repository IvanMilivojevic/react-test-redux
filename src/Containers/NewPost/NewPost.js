import React, { Component } from "react";
import Axios from "axios";
import styles from "./NewPost.module.css";
import FormField from "../../Components/UI/FormField";

class NewPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: [
        { name: "author", placeholder: "Author", type: "input", value: "", required: true, valid: false },
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
      ],
      formSubmitted: false,
    };
  }

  inputValidation = (value) => {
    const inputValue = value.trim();

    return inputValue !== "";
  };

  changeValueHandler = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const fieldValid = this.inputValidation(fieldValue);

    this.setState((prevState) => {
      const updatedForm = [...prevState.form];
      const updatedField = { ...updatedForm.find((f) => f.name === fieldName) };
      const updatedFieldIndex = updatedForm.findIndex((f) => f.name === fieldName);
      updatedField.value = fieldValue;
      updatedField.valid = fieldValid;
      updatedForm[updatedFieldIndex] = updatedField;

      return {
        form: updatedForm,
      };
    });
  };

  formSubmit = (event) => {
    event.preventDefault();
    const shouldSubmit = this.state.form.every((field) => field.valid);

    if (shouldSubmit) {
      const formData = {};
      this.state.form.forEach((field) => {
        formData[field.name] = field.value;
      });

      Axios.post("/posts", formData)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    this.setState({ formSubmitted: true });
  };

  render() {
    return (
      <div className={styles.FormWrapper}>
        <h2>New Post Form:</h2>
        <form>
          {this.state.form.map((field) => (
            <FormField
              {...field}
              changed={this.changeValueHandler}
              key={field.name}
              checker={this.state.formSubmitted}
            />
          ))}
          <button type="submit" className={styles.SubmitButton} onClick={this.formSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default NewPost;
