import _ from "lodash";
import React from "react";
import { fetchStream, editStream } from "../../actions";
import { connect } from "react-redux";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };
  render() {
    console.log(this.props);
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <div>
          <h3>Edit a Stream</h3>
          <StreamForm
            initialValues={_.pick(this.props.stream, "title", "description")}
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
