import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput({ input }) {
    return <input {...input} />;
  }
  render() {
    return (
      <Fragment>
        <form>
          <Field name="title" component={this.renderInput} />
          <Field name="description" component={this.renderInput} />
        </form>
      </Fragment>
    );
  }
}

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
